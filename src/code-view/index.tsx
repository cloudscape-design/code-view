// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
"use client";
import { applyDisplayName } from "../internal/base-component/apply-display-name";
import useBaseComponent from "../internal/base-component/use-base-component";
import type { CodeViewProps } from "./interfaces";
import { InternalCodeView } from "./internal";

export type { CodeViewProps };

export default function CodeView(props: CodeViewProps) {
  const baseComponentProps = useBaseComponent("CodeView", {
    props: { lineNumbers: props.lineNumbers, wrapLines: props.wrapLines },
    metadata: { hasActions: !!props.actions },
  });
  return <InternalCodeView {...props} {...baseComponentProps} />;
}

applyDisplayName(CodeView, "CodeView");
