// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { ScreenshotWithOffset } from "@cloudscape-design/browser-test-tools/page-objects";

import { PageObject } from "./page-object";

const screenshotAreaSelector = ".screenshot-area";

export type TestDefinition =
  | {
      description: string;
      tests: TestDefinition[];
    }
  | {
      description: string;
      path: string;
      windowSize?: { width: number; height: number };
      queryParams?: Record<string, string>;
      test: (page: PageObject) => Promise<ScreenshotWithOffset>;
    };

export const testDefinitions: TestDefinition[] = [
  {
    description: "code-view",
    tests: [
      {
        description: "simple",
        path: "code-view/simple",
        test: (page) => {
          return page.captureBySelector(screenshotAreaSelector);
        },
      },
      {
        description: "with actions button",
        path: "code-view/with-actions-button",
        test: (page) => {
          return page.captureBySelector(screenshotAreaSelector);
        },
      },
      {
        description: "with all features",
        path: "code-view/with-all-features",
        test: (page) => {
          return page.captureBySelector(screenshotAreaSelector);
        },
      },
      {
        description: "with line numbers",
        path: "code-view/with-line-numbers",
        test: (page) => {
          return page.captureBySelector(screenshotAreaSelector);
        },
      },
      {
        description: "with line wrapping",
        path: "code-view/with-line-wrapping",
        test: (page) => {
          return page.captureBySelector(screenshotAreaSelector);
        },
      },
      {
        description: "with syntax highlighting",
        path: "code-view/with-syntax-highlighting",
        test: (page) => {
          return page.captureBySelector(screenshotAreaSelector);
        },
      },
    ],
  },
];
