// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import fs from "node:fs";
import path from "node:path";
import url from "node:url";
import { describe, expect, test } from "vitest";

const dirname = path.dirname(url.fileURLToPath(import.meta.url));
const rulesDir = path.resolve(dirname, "../highlight");
const rules = fs.readdirSync(rulesDir).filter((file) => file !== "index.tsx");

describe("highlight rules can be loaded", () => {
  test.each(rules)("%s", async (rule) => {
    // eslint-disable-next-line no-unsanitized/method
    const { default: highlight } = await import(path.join(rulesDir, rule));
    expect(highlight("")).toBeDefined();
  });
});
