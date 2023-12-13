// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import Box from "@cloudscape-design/components/box";
import clsx from "clsx";
import { getBaseProps } from "../internal/base-component/use-base-component";
import { CodeViewProps } from "./interfaces";
import styles from "./styles.css.js";

function getLineNumbers(content: string) {
  return content.split("\n").map((_, n) => n + 1);
}

const ACE_CLASSES = ["ace-cloud_editor", "ace-cloud_editor_dark"];

export function InternalCodeView({ content, copyButton, lineNumbers, highlight, ...props }: CodeViewProps) {
  const code = highlight ? highlight(content) : <span>{content}</span>;
  const baseProps = getBaseProps(props);

  return (
    <div
      {...baseProps}
      className={clsx(
        styles.root,
        ACE_CLASSES,
        lineNumbers && styles["root-with-numbers"],
        copyButton && styles["root-with-copy-button"]
      )}
    >
      {lineNumbers && (
        <div className={styles["line-numbers"]} aria-hidden={true}>
          {getLineNumbers(content).map((number) => (
            <div key={number}>{number}</div>
          ))}
        </div>
      )}
      <pre
        className={clsx(
          styles.code,
          lineNumbers && styles["code-with-line-numbers"],
          copyButton && styles["code-with-copy-button"]
        )}
      >
        <Box variant="code" fontSize="body-m">
          {code}
        </Box>
      </pre>
      {copyButton && <div className={styles["copy-button"]}>{copyButton}</div>}
    </div>
  );
}
