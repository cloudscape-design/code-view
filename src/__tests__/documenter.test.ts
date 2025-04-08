// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { expect, test } from "vitest";

// @ts-expect-error no types here
import apiDocs from "../../lib/components/internal/api-docs/components";

test.skip("definition for code-view matches the snapshot", () => {
  const definition = apiDocs["code-view"];
  expect(definition).toMatchSnapshot();
});
