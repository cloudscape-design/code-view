// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { PageObject } from "./page-object";

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
      test: (page: PageObject) => Promise<string>;
    };

export const testDefinitions: TestDefinition[] = [
  {
    description: "code-view",
    tests: [
      {
        description: "simple",
        path: "code-view/simple",
        test: async (page) => {
          await page.openScenario();
          return page.fullPageScreenshot();
        },
      },
      {
        description: "with actions button",
        path: "code-view/with-actions-button",
        test: async (page) => {
          await page.openScenario();
          return page.fullPageScreenshot();
        },
      },
      {
        description: "with all features",
        path: "code-view/with-all-features",
        test: async (page) => {
          await page.openScenario();
          return page.fullPageScreenshot();
        },
      },
      {
        description: "with line numbers",
        path: "code-view/with-line-numbers",
        test: async (page) => {
          await page.openScenario();
          return page.fullPageScreenshot();
        },
      },
      {
        description: "with line wrapping",
        path: "code-view/with-line-wrapping",
        test: async (page) => {
          await page.openScenario();
          return page.fullPageScreenshot();
        },
      },
      {
        description: "with syntax highlighting",
        path: "code-view/with-syntax-highlighting",
        test: async (page) => {
          await page.openScenario();
          return page.fullPageScreenshot();
        },
      },
    ],
  },
];
