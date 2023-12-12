import CodeView from "@amzn/awsui-community-code-view/code-view";
import jsHighlight from "@amzn/awsui-community-code-view/highlight/javascript";

export default function () {
  return (
    <CodeView
      highlight={jsHighlight}
      content={`function hello() {
  console.log("Hello, world!")
}`}
    />
  );
}
