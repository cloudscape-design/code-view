// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { Button, SpaceBetween } from "@cloudscape-design/components";

import { CodeView } from "../../lib/components";
import { ScreenshotArea } from "../screenshot-area";
export default function CodeViewPage() {
  return (
    <ScreenshotArea>
      <h1>Code View</h1>
      <SpaceBetween direction="vertical" size="l">
        <CodeView lineNumbers={true} content={`# Hello World`} />
        <CodeView lineNumbers={true} content={`# Hello World\n\nThis is Cloudscape.`} />
        <CodeView
          lineNumbers={true}
          content={`# Hello World`}
          actions={<Button ariaLabel="Copy code" iconName="copy"></Button>}
        />
      </SpaceBetween>
    </ScreenshotArea>
  );
}
