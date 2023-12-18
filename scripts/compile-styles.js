// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { ThemeBuilder, buildThemedComponentsInternal } from "@cloudscape-design/theming-build";

// Generates scoped styles for the component
// The output includes files like 'styles.css.js', 'styles.scoped.css', and 'styles.selectors.js'
await buildThemedComponentsInternal({
  primary: new ThemeBuilder("unused", ":root", []).build(), // "unused" as placeholder and ":root" for global style
  componentsOutputDir: "lib/components", // sets the output directory for the processed styles
  skip: ["design-tokens", "preset"], // skips generation of design tokens and presets
  scssDir: "src", // sets the source directory for SCSS files
  variablesMap: {}, // not needed - can be used for custom token-variable mappings
  exposed: [], // not needed - can be used for exposing specific design tokens
});
