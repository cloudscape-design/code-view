// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { JavaHighlightRules } from "ace-code/src/mode/java_highlight_rules";

import { createHighlight } from ".";

export default createHighlight(new JavaHighlightRules());
