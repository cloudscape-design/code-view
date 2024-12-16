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
        <CodeView actions={<Button ariaLabel="Copy code" iconName="copy"></Button>} content={`Lorem Ipsum `} />
        <CodeView
          actions={<Button ariaLabel="Copy code" iconName="copy"></Button>}
          content={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
        />
        <CodeView
          lineNumbers={true}
          wrapLines={true}
          actions={<Button ariaLabel="Copy code" iconName="copy"></Button>}
          content={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
        />
      </SpaceBetween>
    </ScreenshotArea>
  );
}
