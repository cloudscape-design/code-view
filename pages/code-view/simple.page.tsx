// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { Box } from "@cloudscape-design/components";
import { JavaScriptHighlightRules } from "ace-code/src/mode/javascript_highlight_rules";
import { CodeView } from "../../lib/components";
import { createHighlight } from "../../lib/components/code-view/highlight";
import { ScreenshotArea } from "../screenshot-area";
export default function CodeViewPage() {
  return (
    <ScreenshotArea>
      <h1>Code View</h1>
      <main>
        <Box>
          <CodeView
            content={`const hello = "np";
          console.log('Hello')
          function hello() {}`}
            highlight={createHighlight(new JavaScriptHighlightRules())}
          />
        </Box>
      </main>
    </ScreenshotArea>
  );
}
