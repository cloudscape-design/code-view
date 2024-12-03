// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { Box, SpaceBetween } from "@cloudscape-design/components";

import { CodeView } from "../../lib/components";
import htmlHighlight from "../../lib/components/code-view/highlight/html";
import javaHighlight from "../../lib/components/code-view/highlight/java";
import javascriptHighlight from "../../lib/components/code-view/highlight/javascript";
import jsonHighlight from "../../lib/components/code-view/highlight/json";
import markdownHighlight from "../../lib/components/code-view/highlight/markdown";
import phpHighlight from "../../lib/components/code-view/highlight/php";
import pythonHighlight from "../../lib/components/code-view/highlight/python";
import shHighlight from "../../lib/components/code-view/highlight/sh";
import typescriptHighlight from "../../lib/components/code-view/highlight/typescript";
import xmlHighlight from "../../lib/components/code-view/highlight/xml";
import yamlHighlight from "../../lib/components/code-view/highlight/yaml";
import { ScreenshotArea } from "../screenshot-area";

import cssHighlight from "../../lib/components/code-view/highlight/css";
export default function CodeViewPage() {
  return (
    <ScreenshotArea>
      <h1>Code View</h1>
      <SpaceBetween direction="vertical" size="l">
        <Box>JavaScript</Box>
        <CodeView content={`const hello = "world";\nconsole.log(hello);`} highlight={javascriptHighlight} />
        <Box>TypeScript</Box>
        <CodeView content={`let hello: string = "world";\nconsole.log(hello);`} highlight={typescriptHighlight} />
        <Box>XML</Box>
        <CodeView content={`<greeting>Hello, world!</greeting>`} highlight={xmlHighlight} />
        <Box>Markdown (MDX)</Box>
        <CodeView content={`# Hello World\n\nThis is a markdown example.`} highlight={markdownHighlight} />
        <Box>Bash (Shell Script)</Box>
        <CodeView content={`echo "Hello, world!"`} highlight={shHighlight} />
        <Box>CSS</Box>
        <CodeView content={`body { background-color: lightblue; }`} highlight={cssHighlight} />
        <Box>HTML</Box>
        <CodeView content={`<h1>Hello, World!</h1>`} highlight={htmlHighlight} />
        <Box>Java</Box>
        <CodeView
          content={`public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}`}
          highlight={javaHighlight}
        />
        <Box>JSON</Box>
        <CodeView content={`{"greeting": "Hello, world!"}`} highlight={jsonHighlight} />
        <Box>PHP</Box>
        <CodeView content={`<?php\necho 'Hello, world!';\n?>`} highlight={phpHighlight} />
        <Box>Python</Box>
        <CodeView content={`print("Hello, World!")`} highlight={pythonHighlight} />
        <Box>YAML</Box>
        <CodeView content={`greeting: Hello, world!`} highlight={yamlHighlight} />
      </SpaceBetween>
    </ScreenshotArea>
  );
}
