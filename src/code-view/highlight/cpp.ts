// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { c_cppHighlightRules } from "ace-code/src/mode/c_cpp_highlight_rules";

import { createHighlight } from ".";

export default createHighlight(new c_cppHighlightRules());
