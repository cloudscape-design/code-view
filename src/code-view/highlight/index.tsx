// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import type { Ace } from "ace-code";
import "./styles.css";
import clsx from "clsx";
import styles from "./styles.css.js";
import { tokenize } from "./tokenize";

const ACE_CLASSES = { light: "ace-cloud_editor", dark: "ace-cloud_editor_dark" };
export function createHighlight(rules: Ace.HighlightRules) {
  return (code: string) => {
    const tokens = tokenize(code, rules);

    return (
      <span className={clsx(styles[ACE_CLASSES.light], styles[ACE_CLASSES.dark])}>
        {tokens.map((lineTokens) => (
          <>
            {lineTokens.map((token, tokenIndex) => {
              const classes = token?.className?.split(" ").map((c) => styles[c]);
              return token.className ? (
                <span className={clsx(classes)} key={tokenIndex}>
                  {token.value}
                </span>
              ) : (
                token.value
              );
            })}
            {"\n"}
          </>
        ))}
      </span>
    );
  };
}
