// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { Button } from "@cloudscape-design/components";
import { CodeView } from "../../lib/components";
import javascriptHighlight from "../../lib/components/code-view/highlight/javascript";
import { ScreenshotArea } from "../screenshot-area";

export default function CodeViewPage() {
  return (
    <ScreenshotArea>
      <h1>Code View</h1>
      <main>
        <CodeView
          ariaLabel="Code snippet with all features enabled"
          actions={<Button>Copy</Button>}
          content={`const hello = "np";\nconsole.log('Hello')\nfunction hello() {}\nthrow new Error()`}
          lineNumbers={true}
          highlight={javascriptHighlight}
        />
      </main>
    </ScreenshotArea>
  );
}
