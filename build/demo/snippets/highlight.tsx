// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import CodeView from "@cloudscape-design/code-view/code-view";
import jsHighlight from "@cloudscape-design/code-view/highlight/javascript";

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
