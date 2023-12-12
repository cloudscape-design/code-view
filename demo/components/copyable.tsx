import React from "react";
import Header from "@amzn/awsui-components-react-v3/polaris/header";
import { CodeView, CopyButton } from "../../dist";
import commandsSh from "../fixtures/commands.sh?raw";

export default function CopyableCode() {
  return (
    <>
      <Header description="Code snippet with a copy to clipboard button">Copyable demo</Header>
      <CodeView
        content={commandsSh}
        copyButton={
          <CopyButton
            buttonAriaLabel="Copy code"
            successText="Snippet copied"
            errorText="Could not copy the snippet"
            content={commandsSh}
          />
        }
      />
    </>
  );
}
