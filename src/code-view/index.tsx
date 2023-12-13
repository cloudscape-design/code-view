// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import useBaseComponent from "../internal/base-component/use-base-component";
import { applyDisplayName } from "../internal/utils/apply-display-name";
import type { CodeViewProps } from "./interfaces";
import { InternalCodeView } from "./internal";

export type { CodeViewProps };

export default function CodeView(props: CodeViewProps) {
  const baseComponentProps = useBaseComponent("CodeView");
  return <InternalCodeView {...props} {...baseComponentProps} />;
}

applyDisplayName(CodeView, "CodeView");
