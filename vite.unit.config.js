// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { defineConfig } from "vite";
import base from "./vite.config.js";

// https://vitejs.dev/config/
export default defineConfig({
  ...base,
  root: "./",
  test: {
    include: ["./src/**/__tests__/**/*.test.{ts,tsx}"],
    environment: "jsdom",
    coverage: {
      enabled: process.env.CI === "true",
      provider: "v8",
      include: ["src/**"],
      exclude: ["./src/highlight/*", "**/__tests__/**"],
    },
  },
  plugins: [vanillaExtractPlugin()],
});
