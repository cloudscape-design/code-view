import React from "react";
import CodeView from "../../dist/code-view";
import CopyButton from "../../dist/internal/copy-button";
import jsHighlight from "../../dist/highlight/javascript";

const code = `function hello() {
  console.log("Hello, world!");
}
`;

export default function () {
  return (
    <CodeView
      copyButton={
        <CopyButton
          buttonAriaLabel="Copy code"
          successText="Snippet copied"
          errorText="Could not copy the snippet"
          content={code}
        />
      }
      highlight={jsHighlight}
      content={code}
    />
  );
}
