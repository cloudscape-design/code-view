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

type InternalCodeViewProps = CodeViewProps & InternalBaseComponentProps;

export function InternalCodeView({
  content,
  actions,
  lineNumbers,
  highlight,
  ariaLabel,
  ariaLabelledby,
  __internalRootRef = null,
  ...props
}: InternalCodeViewProps) {
  const baseProps = getBaseProps(props);
  const preRef = useRef<HTMLPreElement>(null);
  const darkMode = useCurrentMode(preRef) === "dark";

  const regionProps = ariaLabel || ariaLabelledby ? { role: "region" } : {};

  return (
    <div
      className={clsx(darkMode ? ACE_CLASSES.dark : ACE_CLASSES.light, styles.root)}
      {...regionProps}
      {...baseProps}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
      ref={__internalRootRef}
    >
      <table className={clsx(styles["code-table"])}>
        <tbody>
          {content.split("\n").map((line, index) => {
            const highlightedLine = highlight ? highlight(line) : <span>{line}</span>;
            return (
              <tr key={index}>
                {lineNumbers && (
                  <td className={styles["line-number"]} aria-hidden={true}>
                    <Box color="text-status-inactive" fontSize="body-m">
                      {index + 1}
                    </Box>
                  </td>
                )}
                <td className={styles["code-line"]}>
                  <Box color="inherit" variant="code" fontSize="body-m">
                    {highlightedLine}
                  </Box>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {actions && <div className={styles.actions}>{actions}</div>}
    </div>
  );
}
