// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { Box } from "@cloudscape-design/components";
import { CodeView } from "../../lib/components";

// import jsHighlight from "../../lib/components/code-view/highlight/javascript";
import { ScreenshotArea } from "../screenshot-area";
export default function CodeViewPage() {
  return (
    <ScreenshotArea>
      <h1>Code View</h1>
      <main>
        <Box>
          <CodeView copyButton={<button>Click me</button>} content={"Hello World"} lineNumbers={true} />
        </Box>
      </main>
    </ScreenshotArea>
  );
}
