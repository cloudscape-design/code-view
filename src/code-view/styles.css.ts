import { createGlobalTheme, createThemeContract, style } from "@vanilla-extract/css";
import * as awsui from "@amzn/awsui-design-tokens";

const vars = createThemeContract({
  colorBackgroundCode: null,
  colorBackgroundButton: null,
});
createGlobalTheme(":root", vars, {
  colorBackgroundCode: "#f4f4f4",
  colorBackgroundButton: "rgba(244, 244, 244, 0.8)",
});
createGlobalTheme(".awsui-polaris-dark-mode", vars, {
  colorBackgroundCode: "#000716",
  colorBackgroundButton: "rgba(0, 7, 22, 0.8)",
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
  borderRightColor: awsui.colorBorderDividerDefault,
});

export const copyButton = style({
  flex: "0 0 auto",
  paddingLeft: awsui.spaceContainerHorizontal,
});
