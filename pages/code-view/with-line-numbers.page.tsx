// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { Button, SpaceBetween } from "@cloudscape-design/components";

import { CodeView, CodeViewProps } from "../../lib/components";
import { ScreenshotArea } from "../screenshot-area";

const i18nStrings: CodeViewProps.I18nStrings = {
  lineNumberLabel: `Line number`,
  codeLabel: `Code`,
};

export default function CodeViewPage() {
  return (
    <ScreenshotArea>
      <h1>Code View</h1>
      <SpaceBetween direction="vertical" size="l">
        <CodeView lineNumbers={true} i18nStrings={i18nStrings} content={`# Hello World`} />
        <CodeView lineNumbers={true} i18nStrings={i18nStrings} content={`# Hello World\n\nThis is Cloudscape.`} />
        <CodeView
          lineNumbers={true}
          i18nStrings={i18nStrings}
          content={`# Hello World`}
          actions={<Button ariaLabel="Copy code" iconName="copy"></Button>}
        />
        {/* Wrapping should not be affected by the parent's word-break property. */}
        <div style={{ wordBreak: "break-word" }}>
          <CodeView
            lineNumbers={true}
            i18nStrings={i18nStrings}
            content={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => `This is line number #${i}.`).join("\n")}
          />
        </div>
      </SpaceBetween>
    </ScreenshotArea>
  );
}
