// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { expect, test } from "vitest";
import { requireComponentDefinition } from "./utils";

test(`definition for code-view matches the snapshot`, () => {
  const definition = requireComponentDefinition("code-view");
  expect(definition).toMatchSnapshot("code-view");
});
