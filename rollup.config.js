// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import typescript from "@rollup/plugin-typescript";
import { vanillaExtractPlugin } from "@vanilla-extract/rollup-plugin";
import ignore from "rollup-plugin-ignore";

/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
  input: {
    "internal/copy-button/index": "./src/internal/copy-button/index.tsx",
    "code-view/index": "./src/code-view/index.tsx",
  },
  output: {
    sourcemap: true,
    dir: "dist",
  },
  external: (id) => !(/\.vanilla\.css/.test(id) || /^([./])/.test(id)),
  plugins: [typescript(), vanillaExtractPlugin(), ignore(["src/code-view/__tests__/index.test.tsx"])],
};
export default config;
