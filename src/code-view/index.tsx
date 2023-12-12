import clsx from "clsx";
import React from "react";
import Box from "@amzn/awsui-components-react-v3/polaris/box";
import * as classes from "./styles.css";
export interface CodeViewProps {
  content: string;
  lineNumbers?: boolean;
  copyButton?: React.ReactNode;
  highlight?: (code: string) => React.ReactNode;
}

function getLineNumbers(content: string) {
  return content.split("\n").map((_, n) => n + 1);
}

const ACE_CLASSES = ["ace-cloud_editor", "ace-cloud_editor_dark"];

export default function CodeView({ content, copyButton, lineNumbers, highlight }: CodeViewProps) {
  const code = highlight ? highlight(content) : <span>{content}</span>;

  return (
    <div
      className={clsx(
        classes.root,
        ACE_CLASSES,
        lineNumbers && classes.rootWithNumbers,
        copyButton && classes.rootWithCopyButton
      )}
    >
      {lineNumbers && (
        <div className={classes.lineNumbers} aria-hidden={true}>
          {getLineNumbers(content).map((number) => (
            <div key={number}>{number}</div>
          ))}
        </div>
      )}
      <pre className={clsx(classes.code, lineNumbers && classes.codeWithNumbers, copyButton && classes.codeWithCopy)}>
        <Box variant="code" fontSize="body-m">
          {code}
        </Box>
      </pre>
      {copyButton && <div className={classes.copyButton}>{copyButton}</div>}
    </div>
  );
}
