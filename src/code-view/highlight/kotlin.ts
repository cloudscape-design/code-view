// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { KotlinHighlightRules } from "ace-code/src/mode/kotlin_highlight_rules";
import { createHighlight } from ".";

export default createHighlight(new KotlinHighlightRules());
