// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import react from "@vitejs/plugin-react";

import { defineConfig } from "vite";

/** @type {import('vite').UserConfig} */
export default defineConfig({
  root: "./demo",
  base: "./",
  plugins: [react({ fastRefresh: false }), vanillaExtractPlugin()],
  resolve: {
    alias: {
      "@cloudscape-design/code-view": __dirname + "/dist",
    },
  },
  build: {
    outDir: "../build/static",
  },
});
