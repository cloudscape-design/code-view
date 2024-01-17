// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { CodeViewProps } from "../../lib/components/code-view";

const codeViewProps: CodeViewProps = {
  content: "",
};

export const defaultProps = {
  "code-view": codeViewProps,
} as const;
