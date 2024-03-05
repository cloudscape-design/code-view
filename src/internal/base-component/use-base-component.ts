// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import {
  ComponentConfiguration,
  initAwsUiVersions,
  useComponentMetadata,
} from "@cloudscape-design/component-toolkit/internal";
import { MutableRefObject } from "react";
import { PACKAGE_SOURCE, PACKAGE_VERSION } from "../environment";
import { useTelemetry } from "./use-telemetry";

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
  const elementRef = useComponentMetadata<T>(componentName, PACKAGE_VERSION);
  return { __internalRootRef: elementRef };
}

export interface BaseComponentProps {
  /**
   * Adds the specified classes to the root element of the component.
   * @deprecated Custom CSS is not supported. For other use cases, use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).
   */
  className?: string;
  /**
   * Adds the specified ID to the root element of the component.
   * @deprecated Custom CSS is not supported. For other use cases, use [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).
   */
  id?: string;
  // we also support data-* attributes, but they are always implicitly allowed by typescript
  // http://www.typescriptlang.org/docs/handbook/jsx.html#attribute-type-checking
  // "Note: If an attribute name is not a valid JS identifier (like a data-* attribute), it is not considered to be an error"
}

export function getBaseProps(props: BaseComponentProps) {
  const baseProps: Record<string, any> = {};
  Object.keys(props).forEach((prop) => {
    if (prop === "id" || prop.match(/^data-/)) {
      baseProps[prop] = (props as Record<string, any>)[prop];
    }
  });
  return baseProps as BaseComponentProps;
}
