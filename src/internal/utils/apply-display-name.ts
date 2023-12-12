// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
export function applyDisplayName<T>(component: T, displayName: string): void {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (component as any).displayName = displayName;
}
