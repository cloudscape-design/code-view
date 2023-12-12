// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { RubyHighlightRules } from "ace-code/src/mode/ruby_highlight_rules";
import { createHighlight } from ".";

export default createHighlight(new RubyHighlightRules());
