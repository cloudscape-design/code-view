import React from "react";
import Header from "@amzn/awsui-components-react-v3/polaris/header";
import Box from "@amzn/awsui-components-react-v3/polaris/box";
import CodeView from "../../dist/code-view";
import jsonHighlight from "../../dist/highlight/json";

export function Installation() {
  return (
    <div id="installation">
      <Header>Installation</Header>
      <Box variant="p">
        Add this line to your{" "}
        <Box variant="pre" display="inline">
          Config
        </Box>{" "}
        file
      </Box>
      <CodeView
        content={`test-dependencies = {
  AWS-UI-Community-CodeView = 1.0;
}`}
      />
      <Box variant="p">
        And this line to your{" "}
        <Box variant="pre" display="inline">
          package.json
        </Box>
      </Box>
      <CodeView
        highlight={jsonHighlight}
        content={`"devDependencies": {
  "@amzn/awsui-community-code-view": "*",
}`}
      />
    </div>
  );
}
