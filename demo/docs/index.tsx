// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import Box from "@cloudscape-design/components/box";
import Header from "@cloudscape-design/components/header";

import { Api } from "./api";
import { Features } from "./features";
import { Installation } from "./installation";
import classes from "./styles.module.scss";

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
