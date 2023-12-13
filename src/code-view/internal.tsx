// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import Box from "@cloudscape-design/components/box";
import clsx from "clsx";
import { CodeViewProps } from "./interfaces";
import * as classes from "./styles.css";

function getLineNumbers(content: string) {
  return content.split("\n").map((_, n) => n + 1);
}

const ACE_CLASSES = ["ace-cloud_editor", "ace-cloud_editor_dark"];

export function InternalCodeView({ content, copyButton, lineNumbers, highlight }: CodeViewProps) {
  const code = highlight ? highlight(content) : <span>{content}</span>;

  return (
    <div
      className={clsx(
        classes.root,
        ACE_CLASSES,
        lineNumbers && classes.rootWithNumbers,
        copyButton && classes.rootWithCopyButton,
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
