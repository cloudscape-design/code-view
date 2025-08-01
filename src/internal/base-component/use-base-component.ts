// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { MutableRefObject } from "react";

import {
  ComponentConfiguration,
  initAwsUiVersions,
  useComponentMetadata,
} from "@cloudscape-design/component-toolkit/internal";

import { PACKAGE_SOURCE, PACKAGE_VERSION, THEME } from "../environment";
import { getVisualTheme } from "../utils/get-visual-theme";
import { useTelemetry } from "./use-telemetry";
import { useVisualRefresh } from "./use-visual-refresh";

initAwsUiVersions(PACKAGE_SOURCE, PACKAGE_VERSION);

export interface InternalBaseComponentProps {
  __internalRootRef?: MutableRefObject<any> | null;
}

/**
 * This hook is used for components which are exported to customers. The returned __internalRootRef needs to be
 * attached to the (internal) component's root DOM node. The hook takes care of attaching the metadata to this
 * root DOM node and emits the telemetry for this component.
 */
export default function useBaseComponent<T = any>(componentName: string, config?: ComponentConfiguration) {
  useTelemetry(componentName, config);
  const isVisualRefresh = useVisualRefresh();
  const theme = getVisualTheme(THEME, isVisualRefresh);
  const elementRef = useComponentMetadata<T>(componentName, {
    packageName: PACKAGE_SOURCE,
    version: PACKAGE_VERSION,
    theme,
  });
  return { __internalRootRef: elementRef };
}

// we also support data-* attributes, but they are always implicitly allowed by typescript
// http://www.typescriptlang.org/docs/handbook/jsx.html#attribute-type-checking
// "Note: If an attribute name is not a valid JS identifier (like a data-* attribute), it is not considered to be an error"
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface BaseComponentProps {}

export function getBaseProps(props: BaseComponentProps) {
  const baseProps: Record<string, string> = {};
  Object.keys(props).forEach((prop) => {
    if (prop.startsWith("data-")) {
      baseProps[prop] = (props as Record<string, string>)[prop];
    }
  });
  return baseProps;
}
