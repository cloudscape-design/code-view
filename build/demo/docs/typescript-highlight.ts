// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { TypeScriptHighlightRules } from "ace-code/src/mode/typescript_highlight_rules";
import { createHighlight } from "../../dist/highlight";

export const tsHighlight = createHighlight(new TypeScriptHighlightRules());
