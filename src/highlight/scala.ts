// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { ScalaHighlightRules } from "ace-code/src/mode/scala_highlight_rules";
import { createHighlight } from ".";

export default createHighlight(new ScalaHighlightRules());
