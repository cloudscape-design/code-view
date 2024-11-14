// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { CssHighlightRules } from "ace-code/src/mode/css_highlight_rules";

import { createHighlight } from ".";

export default createHighlight(new CssHighlightRules());
