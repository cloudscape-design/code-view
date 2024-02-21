// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import type { Ace } from "ace-code";
import { tokenize } from "ace-code/src/ext/simple_tokenizer";
import { Fragment } from "react";
import "ace-code/styles/theme/cloud_editor.css";
import "ace-code/styles/theme/cloud_editor_dark.css";

export function createHighlight(rules: Ace.HighlightRules) {
  return (code: string) => {
    const tokens = tokenize(code, rules);
    return (
      <span>
        {tokens.map((lineTokens, lineIndex) => (
          <Fragment key={lineIndex}>
            {lineTokens.map((token, tokenIndex) => {
              return token.className ? (
                <span className={token?.className} key={tokenIndex}>
                  {token.value}
                </span>
              ) : (
                token.value
              );
            })}
            {"\n"}
          </Fragment>
        ))}
      </span>
    );
  };
}
