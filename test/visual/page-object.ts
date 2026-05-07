// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { ScreenshotPageObject } from "@cloudscape-design/browser-test-tools/page-objects";

export class PageObject extends ScreenshotPageObject {
  constructor(
    browser: WebdriverIO.Browser,
    private readonly path: string,
    private readonly queryParams?: Record<string, string>,
  ) {
    super(browser);
  }

  async openScenario() {
    const query = this.queryParams ? "?" + new URLSearchParams(this.queryParams).toString() : "";
    await this.browser.url(`/#/${this.path}${query}`);
    await this.waitForVisible("main");
  }
}
