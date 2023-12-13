// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import Box from "@cloudscape-design/components/box";
import Header from "@cloudscape-design/components/header";

import CodeView from "../../dist/code-view";
import jsonHighlight from "../../dist/highlight/json";

export function Installation() {
  return (
    <div id="installation">
      <Header>Installation</Header>
      <Box variant="p">
        And this line to your{" "}
        <Box variant="pre" display="inline">
          package.json
        </Box>
      </Box>
      <CodeView
        highlight={jsonHighlight}
        content={`"devDependencies": {
  "@cloudscape-design/code-view": "*",
}`}
      />
    </div>
  );
}
