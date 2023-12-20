// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    target: "esnext",
    lib: {
      entry: "src/code-view/highlight/tokenize.ts",
      name: "tokenize",
      formats: ["es"],
      fileName: () => "index.js",
    },
    rollupOptions: {
      output: {
        dir: "lib/components/code-view/highlight/tokenize",
      },
    },
  },
});
