// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { PowershellHighlightRules } from "ace-code/src/mode/powershell_highlight_rules";
import { createHighlight } from ".";

export default createHighlight(new PowershellHighlightRules());
