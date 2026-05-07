// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { describe, expect, test } from "vitest";

import useBrowser from "@cloudscape-design/browser-test-tools/use-browser";

import { TestDefinition, testDefinitions } from "./definitions";
import { PageObject } from "./page-object";

const defaultWindowSize = { width: 1600, height: 800 };

function parseAndRun(definitions: TestDefinition[]) {
  for (const definition of definitions) {
    if ("tests" in definition) {
      describe(definition.description, () => {
        parseAndRun(definition.tests);
      });
    } else {
      const windowSize = definition.windowSize ?? defaultWindowSize;
      test(definition.description, () =>
        useBrowser(windowSize, async (browser) => {
          const page = new PageObject(browser, definition.path, definition.queryParams);
          const screenshot = await definition.test(page);
          expect(screenshot).toMatchImageSnapshot();
        })(),
      );
    }
  }
}

parseAndRun(testDefinitions);
