#!/usr/bin/env node
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import fs from "node:fs";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);

/**
 * Remove specific @cloudscape-design/* packages where we should always use the latest minor release.
 * Also checks for any dependencies that incorrectly use CodeArtifact instead of npm.
 */
const filename = require.resolve("../package-lock.json");
const packageLock = require(filename);

if (packageLock.lockfileVersion !== 3) {
  throw Error("package-lock.json file is not version 3. Use regular npm to update the packages.");
}

Object.keys(packageLock.packages).forEach((dependencyName) => {
  const dependency = packageLock.packages[dependencyName];
  if (dependencyName.includes("@cloudscape-design/")) {
    delete packageLock.packages[dependencyName];
  } else if (dependency.resolved && dependency.resolved.indexOf("codeartifact.us-west-2.amazonaws.com") !== -1) {
    throw Error(
      `package-lock.json file contains a reference to CodeArtifact at ${dependencyName}. Use regular npm to update the packages.`,
    );
  }
});

fs.writeFileSync(filename, JSON.stringify(packageLock, null, 2) + "\n");
console.log("Removed @cloudscape-design/ dependencies from package-lock file");
