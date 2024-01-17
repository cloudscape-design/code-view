// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import * as path from "node:path";

const componentsDir = path.resolve(__dirname, "../../lib/components");
const definitionsDir = path.resolve(__dirname, "../../lib/components/internal/api-docs/components");

export function requireComponentDefinition(componentName: string) {
  return require(path.join(definitionsDir, componentName));
}

export async function requireComponent(componentName: string) {
  // eslint-disable-next-line no-unsanitized/method
  const { default: Component } = await import(path.join(componentsDir, componentName));
  return Component;
}
