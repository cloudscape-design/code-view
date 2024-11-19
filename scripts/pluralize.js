// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const pluralizationMap = {
  CodeView: "CodeViews",
};

function pluralizeComponentName(componentName) {
  if (!(componentName in pluralizationMap)) {
    throw new Error(`Could not find the plural case for ${componentName}.`);
  }

  return pluralizationMap[componentName];
}

export { pluralizeComponentName };
