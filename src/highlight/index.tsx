// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import type { Ace } from "ace-code";
import { tokenize } from "ace-code/src/ext/simple_tokenizer";

import "./theme.css";

export function createHighlight(rules: Ace.HighlightRules) {
  return (code: string) => {
    const tokens = tokenize(code, rules);

    return (
      <span>
        {tokens.map((lineTokens) => (
          <>
            {lineTokens.map((token, tokenIndex) =>
              token.className ? (
                <span className={token.className} key={tokenIndex}>
                  {token.value}
                </span>
              ) : (
                token.value
              ),
            )}
            {"\n"}
          </>
        ))}
      </span>
    );
  };
}
