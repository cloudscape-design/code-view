// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { includeIgnoreFile } from "@eslint/compat";
import eslint from "@eslint/js";
import headerPlugin from "eslint-plugin-header";
import noUnsanitizedPlugin from "eslint-plugin-no-unsanitized";
import eslintPrettier from "eslint-plugin-prettier/recommended";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import simpleImportSortPlugin from "eslint-plugin-simple-import-sort";
import unicornPlugin from "eslint-plugin-unicorn";
import globals from "globals";
import path from "node:path";
import tsEslint from "typescript-eslint";

import cloudscapeCommonRules from "@cloudscape-design/build-tools/eslint/index.js";

// https://github.com/Stuk/eslint-plugin-header/issues/57
headerPlugin.rules.header.meta.schema = false;

export default tsEslint.config(
  includeIgnoreFile(path.resolve(".gitignore")),
  {
    settings: {
      react: { version: "detect" },
    },
  },
  eslint.configs.recommended,
  tsEslint.configs.recommended,
  noUnsanitizedPlugin.configs.recommended,
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat["jsx-runtime"],
  reactHooksPlugin.configs["recommended-latest"],
  eslintPrettier,
  {
    files: ["**/*.{js,mjs,ts,tsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      "@cloudscape-design/build-tools": cloudscapeCommonRules,
      "simple-import-sort": simpleImportSortPlugin,
      unicorn: unicornPlugin,
      header: headerPlugin,
    },
    rules: {
      "@typescript-eslint/no-unused-expressions": ["error", { allowTernary: true }],
      "@typescript-eslint/ban-ts-comment": ["error", { "ts-expect-error": "allow-with-description" }],
      "@typescript-eslint/no-namespace": "off",
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
      "@typescript-eslint/no-explicit-any": "off",
      "@cloudscape-design/build-tools/react-server-components-directive": "error",
      "react/display-name": "off",
      "react/no-danger": "error",
      "react/no-unstable-nested-components": ["error", { allowAsProps: true }],
      "react/prop-types": "off",
      "react/jsx-boolean-value": ["error", "always"],
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "typeLike",
          format: ["PascalCase"],
        },
      ],
      "react-hooks/exhaustive-deps": ["error"],
      "unicorn/filename-case": "error",
      curly: "error",
      "dot-notation": "error",
      eqeqeq: "error",
      "no-return-await": "error",
      "require-await": "error",
      "header/header": [
        "error",
        "line",
        [" Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.", " SPDX-License-Identifier: Apache-2.0"],
      ],
      "no-warning-comments": "warn",
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            // External packages come first.
            ["^react", "^(?!@cloudscape)@?\\w"],
            // Cloudscape packages.
            ["^@cloudscape"],
            // Things that start with a letter (or digit or underscore), or `~` followed by a letter.
            ["^~\\w"],
            // Anything not matched in another group.
            ["^"],
            // Styles come last.
            ["^.+\\.?(css)$", "^.+\\.?(css.js)$", "^.+\\.?(scss)$", "^.+\\.?(selectors.js)$"],
          ],
        },
      ],
    },
  },
  {
    files: ["test/**"],
    rules: {
      // useBrowser is not a hook
      "react-hooks/rules-of-hooks": "off",
    },
  },
);
