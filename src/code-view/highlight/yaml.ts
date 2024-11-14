// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { YamlHighlightRules } from "ace-code/src/mode/yaml_highlight_rules";

import { createHighlight } from ".";

export default createHighlight(new YamlHighlightRules());
