// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Bundles the agnostic visual test definitions into lib/test-definitions so they
// can be consumed by the internal pipeline (AWS-UI-IntegrationTests) with its own
// test runner and compareScreenshots utility.
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "test/visual/definitions.ts"),
      name: "CodeViewTestDefinitions",
      fileName: "definitions",
      formats: ["es", "cjs"],
    },
    outDir: "lib/test-definitions",
    sourcemap: true,
    rollupOptions: {
      // Exclude all @cloudscape-design/* packages so the internal pipeline can
      // substitute its own internal counterparts (e.g. @amzn/awsui-*).
      external: [/^@cloudscape-design\//],
    },
  },
});
