// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { CSharpHighlightRules } from "ace-code/src/mode/csharp_highlight_rules";

import { createHighlight } from ".";

export default createHighlight(new CSharpHighlightRules());
