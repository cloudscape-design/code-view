// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import Header from "@cloudscape-design/components/header";
import React from "react";
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
