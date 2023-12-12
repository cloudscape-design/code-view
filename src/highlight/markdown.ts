// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { MarkdownHighlightRules } from "ace-code/src/mode/markdown_highlight_rules";
import { createHighlight } from ".";

export default createHighlight(new MarkdownHighlightRules());
