// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { CodeView } from "../../lib/components";
import { ScreenshotArea } from "../screenshot-area";
export default function CodeViewPage() {
  return (
    <ScreenshotArea>
      <h1>Code View</h1>
      <CodeView content={"Hello World"} />
      <CodeView
        content={`public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}`}
      />
    </ScreenshotArea>
  );
}
