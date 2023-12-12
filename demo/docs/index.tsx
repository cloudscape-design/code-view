import React from "react";
import Header from "@amzn/awsui-components-react-v3/polaris/header";
import Box from "@amzn/awsui-components-react-v3/polaris/box";

import classes from "./styles.module.scss";
import { Features } from "./features";
import { Installation } from "./installation";
import { Api } from "./api";

export default function Docs() {
  return (
    <div className={classes.docsContent}>
      <Features />
      <Installation />
      <Api />

      <Header>Demos</Header>
      <Box variant="p">
        All code fragments on this page use the{" "}
        <Box variant="pre" display="inline">
          &lt;CodeView/&gt;
        </Box>{" "}
        component. But if you want to see more, check out these demos:
      </Box>
    </div>
  );
}
