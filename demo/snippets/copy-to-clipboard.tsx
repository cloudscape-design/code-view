// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import CodeView from "../../dist/code-view";
import jsHighlight from "../../dist/highlight/javascript";
import CopyButton from "../../dist/internal/copy-button";

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
