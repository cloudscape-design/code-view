// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { JsonHighlightRules } from "ace-code/src/mode/json_highlight_rules";
import { createHighlight } from ".";

export default createHighlight(new JsonHighlightRules());
