// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useCurrentMode } from "@cloudscape-design/component-toolkit/internal";
import Box from "@cloudscape-design/components/box";
import clsx from "clsx";
import { useRef } from "react";
import { InternalBaseComponentProps, getBaseProps } from "../internal/base-component/use-base-component";
import { CodeViewProps } from "./interfaces";
import styles from "./styles.css.js";

const ACE_CLASSES = { light: "ace-cloud_editor", dark: "ace-cloud_editor_dark" };

function getLineNumbers(content: string) {
  return content.split("\n").map((_, n) => n + 1);
}

type InternalCodeView = CodeViewProps & InternalBaseComponentProps;

export function InternalCodeView({
  content,
  actions,
  lineNumbers,
  highlight,
  ariaLabel,
  ariaLabelledby,
  __internalRootRef = null,
  ...props
}: InternalCodeView) {
  const code = highlight ? highlight(content) : <span>{content}</span>;
  const baseProps = getBaseProps(props);
  const preRef = useRef<HTMLPreElement>(null);
  const darkMode = useCurrentMode(preRef) === "dark";

  const regionProps = ariaLabel || ariaLabelledby ? { role: "region" } : {};

  return (
    <div
      className={styles.root}
      {...regionProps}
      {...baseProps}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
      ref={__internalRootRef}
    >
      <Box color="inherit" fontSize="body-m">
        <div className={clsx(lineNumbers && styles["root-with-numbers"], actions && styles["root-with-actions"])}>
          {lineNumbers && (
            <div className={styles["line-numbers"]} aria-hidden={true}>
              {getLineNumbers(content).map((number) => (
                <span key={number}>{number}</span>
              ))}
            </div>
          )}
          <pre
            ref={preRef}
            className={clsx(
              darkMode ? ACE_CLASSES.dark : ACE_CLASSES.light,
              styles.code,
              lineNumbers && styles["code-with-line-numbers"],
              actions && styles["code-with-actions"]
            )}
          >
            <Box color="inherit" variant="code" fontSize="body-m">
              {code}
            </Box>
          </pre>
          {actions && <div className={styles.actions}>{actions}</div>}
        </div>
      </Box>
    </div>
  );
}
