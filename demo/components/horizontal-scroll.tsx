import React from "react";
import logTxt from "../fixtures/log.txt?raw";
import CodeView from "../../dist/code-view";
import CopyButton from "../../dist/internal/copy-button";
import Header from "@amzn/awsui-components-react-v3/polaris/header";
import classes from "./styles.module.scss";

export default function HorizontalScroll() {
  return (
    <>
      <Header description="If the text is too long, the horizontal scrollbar renders automatically">
        Horizontal scroll
      </Header>
      <div className={classes.limitedWidth}>
        <CodeView
          content={logTxt}
          copyButton={
            <CopyButton
              buttonAriaLabel="Copy code"
              successText="Snippet copied"
              errorText="Could not copy the snippet"
              content={logTxt}
            />
          }
        />
      </div>
    </>
  );
}
