import React from "react";
import Header from "@amzn/awsui-components-react-v3/polaris/header";
import CodeView from "../../dist/code-view";
import CopyButton from "../../dist/internal/copy-button";
import yamlHighlight from "../../dist/highlight/yaml";
import configYml from "../fixtures/config.yml?raw";
import classes from "./styles.module.scss";

export default function Full() {
  return (
    <>
      <Header description="Syntax highlight, copy button, line numbers">All features together</Header>
      <div className={classes.scrollable}>
        <CodeView
          content={configYml}
          highlight={yamlHighlight}
          lineNumbers={true}
          copyButton={
            <CopyButton
              buttonAriaLabel="Copy code"
              successText="Snippet copied"
              errorText="Could not copy the snippet"
              content={configYml}
            />
          }
        />
      </div>
    </>
  );
}
