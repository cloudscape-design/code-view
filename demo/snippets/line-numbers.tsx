import CodeView from "@cloudscape-design/code-view/code-view";
import jsHighlight from "@cloudscape-design/code-view/highlight/javascript";
import React from "react";

export default function () {
  return (
    <CodeView
      lineNumbers={true}
      highlight={jsHighlight}
      content={`function hello() {
  console.log("Hello, world!")
}`}
    />
  );
}
