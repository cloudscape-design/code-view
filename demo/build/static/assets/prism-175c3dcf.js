const l=`Parameters:
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
                    Value: !Ref CfnEndpoint`;(function(n){var t=/[*&][^\s[\]{},]+/,r=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,a="(?:"+r.source+"(?:[ 	]+"+t.source+")?|"+t.source+"(?:[ 	]+"+r.source+")?)",u=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source}),o=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function e(s,i){i=(i||"").replace(/m/g,"")+"m";var p=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,function(){return a}).replace(/<<value>>/g,function(){return s});return RegExp(p,i)}n.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,function(){return a})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,function(){return a}).replace(/<<key>>/g,function(){return"(?:"+u+"|"+o+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:e(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:e(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:e(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:e(o),lookbehind:!0,greedy:!0},number:{pattern:e(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:r,important:t,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},n.languages.yml=n.languages.yaml})(Prism);export{l as c};
