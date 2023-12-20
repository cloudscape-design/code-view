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

export function InternalCodeView({ content, actions, lineNumbers, highlight, ...props }: CodeViewProps) {
  const code = highlight ? highlight(content) : <span>{content}</span>;
  const baseProps = getBaseProps(props);

  return (
    <Box fontSize="body-m">
      <div
        {...baseProps}
        className={clsx(
          styles.root,
          lineNumbers && styles["root-with-numbers"],
          actions && styles["root-with-actions"]
        )}
      >
        {lineNumbers && (
          <div className={styles["line-numbers"]} aria-hidden={true}>
            {getLineNumbers(content).map((number) => (
              <span key={number}>{number}</span>
            ))}
          </div>
        )}
        <pre
          className={clsx(
            styles.code,
            lineNumbers && styles["code-with-line-numbers"],
            actions && styles["code-with-actions"]
          )}
        >
          <Box variant="code" fontSize="body-m">
            {code}
          </Box>
        </pre>
        {actions && <div className={styles.actions}>{actions}</div>}
      </div>
    </Box>
  );
}
