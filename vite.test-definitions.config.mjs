// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const __dirname = dirname(fileURLToPath(import.meta.url));

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
      external: [/^@cloudscape-design\//],
    },
  },
});
