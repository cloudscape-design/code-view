import{o as s,t as u,e as l}from"./index-15a73f6f.js";var p=s,c=u.TextHighlightRules,o=function(){this.$rules={start:[{token:"comment",regex:"#.*$"},{token:"list.markup",regex:/^(?:-{3}|\.{3})\s*(?=#|$)/},{token:"list.markup",regex:/^\s*[\-?](?:$|\s)/},{token:"constant",regex:"!![\\w//]+"},{token:"constant.language",regex:"[&\\*][a-zA-Z0-9-_]+"},{token:["meta.tag","keyword"],regex:/^(\s*\w[^\s:]*?)(:(?=\s|$))/},{token:["meta.tag","keyword"],regex:/(\w[^\s:]*?)(\s*:(?=\s|$))/},{token:"keyword.operator",regex:"<<\\w*:\\w*"},{token:"keyword.operator",regex:"-\\s*(?=[{])"},{token:"string",regex:'["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'},{token:"string",regex:/[|>][-+\d]*(?:$|\s+(?:$|#))/,onMatch:function(t,i,e,n){n=n.replace(/ #.*/,"");var r=/^ *((:\s*)?-(\s*[^|>])?)?/.exec(n)[0].replace(/\S\s*$/,"").length,a=parseInt(/\d+[\s+-]*$/.exec(n));return a?(r+=a-1,this.next="mlString"):this.next="mlStringPre",e.length?(e[0]=this.next,e[1]=r):(e.push(this.next),e.push(r)),this.token},next:"mlString"},{token:"string",regex:"['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"},{token:"constant.numeric",regex:/(\b|[+\-\.])[\d_]+(?:(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)(?=[^\d-\w]|$)$/},{token:"constant.numeric",regex:/[+\-]?\.inf\b|NaN\b|0x[\dA-Fa-f_]+|0b[10_]+/},{token:"constant.language.boolean",regex:"\\b(?:true|false|TRUE|FALSE|True|False|yes|no)\\b"},{token:"paren.lparen",regex:"[[({]"},{token:"paren.rparen",regex:"[\\])}]"},{token:"text",regex:/[^\s,:\[\]\{\}]+/}],mlStringPre:[{token:"indent",regex:/^ *$/},{token:"indent",regex:/^ */,onMatch:function(t,i,e){var n=e[1];return n>=t.length?(this.next="start",e.shift(),e.shift()):(e[1]=t.length-1,this.next=e[0]="mlString"),this.token},next:"mlString"},{defaultToken:"string"}],mlString:[{token:"indent",regex:/^ *$/},{token:"indent",regex:/^ */,onMatch:function(t,i,e){var n=e[1];return n>=t.length?(this.next="start",e.splice(0)):this.next="mlString",this.token},next:"mlString"},{token:"string",regex:".+"}]},this.normalizeRules()};p.inherits(o,c);var g=o;const d=l(new g),P=`Parameters:
  EnvironmentName:
    Description: An environment name that will be prefixed to resource names
    Type: String

  VpcCIDR:
    Description: Please enter the IP range (CIDR notation) for this VPC
    Type: String
    Default: 10.192.0.0/16
    AllowedPattern: '((\\d{1,3})\\.){3}\\d{1,3}/\\d{1,2}'

  PrivateSubnet1CIDR:
    Description: Please enter the IP range (CIDR notation) for the private subnet in the first Availability Zone
    Type: String
    Default: 10.192.20.0/24
    AllowedPattern: '((\\d{1,3})\\.){3}\\d{1,3}/\\d{1,2}'

  PrivateSubnet2CIDR:
    Description: Please enter the IP range (CIDR notation) for the private subnet in the second Availability Zone
    Type: String
    Default: 10.192.21.0/24
    AllowedPattern: '((\\d{1,3})\\.){3}\\d{1,3}/\\d{1,2}'

  LinuxAMI:
    Description: Managed AMI ID for Amazon Linux
    Type : 'AWS::SSM::Parameter::Value<AWS::EC2::Image::Id>'
    Default: '/aws/service/ami-amazon-linux-latest/amzn-ami-hvm-x86_64-gp2'

Resources:
  VPC:
    Type: AWS::EC2::VPC
    Properties:
      EnableDnsSupport: true
      EnableDnsHostnames: true
      CidrBlock: !Ref VpcCIDR
      Tags:
        - Key: Name
          Value: !Ref EnvironmentName

  # This is the interface endpoint for CloudFormation. You can only deploy this
  # once per region since it will consume the unique DNS entry for the endpoint.
  CfnEndpoint:
    Type: AWS::EC2::VPCEndpoint
    Properties:
      VpcId: !Ref VPC
      ServiceName: !Sub "com.amazonaws.\${AWS::Region}.cloudformation"
      VpcEndpointType: "Interface"
      PrivateDnsEnabled: true
      SubnetIds:
        - !Ref PrivateSubnet1
        - !Ref PrivateSubnet2
      SecurityGroupIds:
        - !Ref EndpointSG

  PrivateSubnet1:
    Type: AWS::EC2::Subnet
    Properties:
      VpcId: !Ref VPC
      AvailabilityZone: !Select [ 0, !GetAZs ]
        CidrBlock: !Ref PrivateSubnet1CIDR
          MapPublicIpOnLaunch: false
          Tags:
            - Key: Name
              Value: !Sub \${EnvironmentName} Private Subnet (AZ1)

          PrivateSubnet2:
            Type: AWS::EC2::Subnet
            Properties:
              VpcId: !Ref VPC
              AvailabilityZone: !Select [ 1, !GetAZs ]
                CidrBlock: !Ref PrivateSubnet2CIDR
                  MapPublicIpOnLaunch: false
                  Tags:
                    - Key: Name
                      Value: !Sub \${EnvironmentName} Private Subnet (AZ2)

                  PrivateRouteTable1:
                    Type: AWS::EC2::RouteTable
                    Properties:
                      VpcId: !Ref VPC
                      Tags:
                        - Key: Name
                          Value: !Sub \${EnvironmentName} Private Routes (AZ1)

                  PrivateSubnet1RouteTableAssociation:
                    Type: AWS::EC2::SubnetRouteTableAssociation
                    Properties:
                      RouteTableId: !Ref PrivateRouteTable1
                      SubnetId: !Ref PrivateSubnet1

                  PrivateRouteTable2:
                    Type: AWS::EC2::RouteTable
                    Properties:
                      VpcId: !Ref VPC
                      Tags:
                        - Key: Name
                          Value: !Sub \${EnvironmentName} Private Routes (AZ2)

                  PrivateSubnet2RouteTableAssociation:
                    Type: AWS::EC2::SubnetRouteTableAssociation
                    Properties:
                      RouteTableId: !Ref PrivateRouteTable2
                      SubnetId: !Ref PrivateSubnet2

                  PrivateInstance:
                    DependsOn: CfnEndpoint
                    Type: AWS::EC2::Instance
                    Properties:
                      InstanceType: t3.micro
                      SecurityGroupIds:
                        - !Ref PrivateSG
                      SubnetId: !Ref PrivateSubnet1
                      ImageId: !Ref LinuxAMI
                      UserData:
                        Fn::Base64:
                          !Sub |
                          #!/bin/bash -x
                          date > /tmp/datefile
                          cat /tmp/datefile
                          # Signal the status from instance
                          /opt/aws/bin/cfn-signal -e $? --stack \${AWS::StackName} --resource PrivateInstance --region \${AWS::Region}

                      Tags:
                        -
                          Key: Name
                          Value: Private
                    CreationPolicy:
                      ResourceSignal:
                        Count: 1
                        Timeout: "PT15M"

                  PrivateSG:
                    Type: AWS::EC2::SecurityGroup
                    Properties:
                      GroupDescription: "Traffic from Bastion"
                      SecurityGroupIngress:
                        -
                          IpProtocol: tcp
                          FromPort: 22
                          ToPort: 22
                          CidrIp: !Ref VpcCIDR
                      VpcId: !Ref VPC
                      Tags:
                        -
                          Key: Name
                          Value: PrivateSG

                  EndpointSG:
                    Type: AWS::EC2::SecurityGroup
                    Properties:
                      GroupDescription: "Traffic into CloudFormation Endpoint"
                      SecurityGroupIngress:
                        -
                          IpProtocol: tcp
                          FromPort: 443
                          ToPort: 443
                          CidrIp: "0.0.0.0/0"
                      VpcId: !Ref VPC
                      Tags:
                        -
                          Key: Name
                          Value: EndpointSG

                Outputs:
                  VPC:
                    Description: A reference to the created VPC
                    Value: !Ref VPC

                  PrivateSubnets:
                    Description: A list of the private subnets
                    Value: !Join [ ",", [ !Ref PrivateSubnet1, !Ref PrivateSubnet2 ]]

                  CfnEndpoint:
                    Description: A reference to the CloudFormation Endpoint used for signaling from the private instance
                    Value: !Ref CfnEndpoint`;export{P as c,d as y};
