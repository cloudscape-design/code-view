// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import Header from "@cloudscape-design/components/header";
import CodeView from "../../dist/code-view";
import logTxt from "../fixtures/log.txt?raw";
import classes from "./styles.module.scss";

export default function VerticalScroll() {
  return (
    <>
      <Header description="If your content is too long, you may put it into scrollable container">
        Vertical scroll
      </Header>
      <div className={classes.scrollable}>
        <CodeView content={logTxt} />
      </div>
    </>
  );
}
