// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import * as tokens from "@cloudscape-design/design-tokens";
import { createGlobalTheme, createThemeContract, style } from "@vanilla-extract/css";

const vars = createThemeContract({
  colorBackgroundCode: null,
});
createGlobalTheme(":root", vars, {
  colorBackgroundCode: "#f4f4f4",
});
createGlobalTheme(".awsui-dark-mode", vars, {
  colorBackgroundCode: "#000716",
});

export const root = style({
  position: "relative",
});

export const rootWithNumbers = style({
  display: "flex",
  alignItems: "stretch",
});

export const rootWithCopyButton = style({ display: "flex" });

export const code = style({
  backgroundColor: vars.colorBackgroundCode,
  padding: "8px",
  margin: 0,
  overflow: "auto",
});

export const codeWithNumbers = style({
  flex: 1,
});

export const codeWithCopy = style({
  flex: 1,
});

export const lineNumbers = style({
  backgroundColor: vars.colorBackgroundCode,
  padding: "8px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  borderRightWidth: 1,
  borderRightStyle: "solid",
  borderRightColor: tokens.colorBorderDividerDefault,
});

export const copyButton = style({
  flex: "0 0 auto",
  paddingLeft: tokens.spaceContainerHorizontal,
});
