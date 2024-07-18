// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { SpaceBetween } from "@cloudscape-design/components";

import { CodeView } from "../../lib/components";
import { ScreenshotArea } from "../screenshot-area";
export default function CodeViewPage() {
  return (
    <ScreenshotArea>
      <h1>Code View</h1>
      <SpaceBetween direction="vertical" size="l">
        <CodeView lineNumbers={true} content={`# Hello World`} />
        <CodeView lineNumbers={true} content={`# Hello World\n\nThis is Cloudscape.`} />
      </SpaceBetween>
    </ScreenshotArea>
  );
}
