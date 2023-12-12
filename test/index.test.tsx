// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { cleanup, render } from "@testing-library/react";
import React from "react";
import { afterEach, describe, expect, test } from "vitest";
import CodeView from "../dist/code-view";
import createWrapper from "../src/test-utils/dom";
describe("WidgetContainer", () => {
  afterEach(() => {
    cleanup();
  });
  test("renders slots", () => {
    render(<CodeView content={"test"}></CodeView>);
    const codeView = createWrapper().findCodeView()!;
    console.log(codeView);
    expect(codeView!.getElement()).toBeDefined();
  });
});
