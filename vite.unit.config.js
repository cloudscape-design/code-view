// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import process from "node:process";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { defineConfig } from "vite";
import base from "./vite.config.js";

// https://vitejs.dev/config/
export default defineConfig({
  ...base,
  root: "./",
  test: {
    include: ["./test/*.test.{ts,tsx}"],
    environment: "jsdom",
  },
  plugins: [vanillaExtractPlugin()],
});
