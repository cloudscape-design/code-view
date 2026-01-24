// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { Children, createElement, Fragment, ReactElement, useRef } from "react";
import clsx from "clsx";

import { useCurrentMode } from "@cloudscape-design/component-toolkit/internal";
import Box from "@cloudscape-design/components/box";

import { getBaseProps, InternalBaseComponentProps } from "../internal/base-component/use-base-component";
import { CodeViewProps } from "./interfaces";

import styles from "./styles.css.js";

const ACE_CLASSES = { light: "ace-cloud_editor", dark: "ace-cloud_editor_dark" };

// Static style objects hoisted outside component to avoid recreation on every render.
const COL_STYLE_SHRINK = { width: 1 };
const COL_STYLE_AUTO = { width: "auto" };

// Static class name for line numbers (doesn't depend on props).
const lineNumberClassName = clsx(styles["line-number"], styles.unselectable);

type InternalCodeViewProps = CodeViewProps & InternalBaseComponentProps;

// Breaks down the input code for non-highlighted code-view into React
// Elements similar to how a highlight function would do.
const textHighlight = (code: string) => {
  const lines = code.split("\n");
  return (
    <span>
      {lines.map((line, lineIndex) => (
        <span key={lineIndex}>
          {line}
          {"\n"}
        </span>
      ))}
    </span>
  );
};

export function InternalCodeView({
  content,
  actions,
  lineNumbers,
  wrapLines,
  highlight,
  ariaLabel,
  ariaLabelledby,
  i18nStrings,
  __internalRootRef = null,
  ...props
}: InternalCodeViewProps) {
  const baseProps = getBaseProps(props);
  const containerRef = useRef<HTMLDivElement>(null);
  const darkMode = useCurrentMode(containerRef) === "dark";

  const regionProps = ariaLabel || ariaLabelledby ? { role: "region" } : {};
  const accessibleLineNumbers = lineNumbers && i18nStrings?.lineNumberLabel && i18nStrings?.codeLabel;

  // Create tokenized React nodes of the content.
  const code = highlight ? highlight(content) : textHighlight(content);
  // Create elements from the nodes.
  const codeElementWrapper: ReactElement = createElement(Fragment, null, code);
  const codeElement = Children.only(codeElementWrapper.props.children);

  // Compute class name for code lines once, outside the render loop.
  const codeLineSpanClassName = clsx(
    codeElement.props.className,
    wrapLines ? styles["code-line-wrap"] : styles["code-line-nowrap"],
  );

  return (
    <div
      className={clsx(darkMode ? ACE_CLASSES.dark : ACE_CLASSES.light, styles.root)}
      {...regionProps}
      {...baseProps}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
      dir="ltr"
      ref={__internalRootRef}
    >
      <div className={styles["scroll-container"]} ref={containerRef}>
        <table
          role={!accessibleLineNumbers ? "presentation" : undefined}
          className={clsx(
            styles["code-table"],
            actions && styles["code-table-with-actions"],
            wrapLines && styles["code-table-with-line-wrapping"],
          )}
        >
          <colgroup>
            <col style={COL_STYLE_SHRINK} />
            <col style={COL_STYLE_AUTO} />
          </colgroup>
          {accessibleLineNumbers && (
            <thead className={styles["screenreader-only"]}>
              <tr>
                {lineNumbers && <th>{i18nStrings.lineNumberLabel}</th>}
                <th>{i18nStrings.codeLabel}</th>
              </tr>
            </thead>
          )}
          <tbody>
            {Children.map(codeElement.props.children, (child, index) => {
              return (
                <tr key={index}>
                  {lineNumbers && (
                    <td className={lineNumberClassName} aria-hidden={!accessibleLineNumbers}>
                      <Box variant="code" color="text-status-inactive" fontSize="body-m">
                        {index + 1}
                      </Box>
                    </td>
                  )}
                  <td className={styles["code-line"]}>
                    <Box variant="code" fontSize="body-m">
                      <span className={codeLineSpanClassName}>{child}</span>
                    </Box>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {actions && <div className={styles.actions}>{actions}</div>}
    </div>
  );
}
