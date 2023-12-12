// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { cleanup, render } from "@testing-library/react";
import { afterEach, describe, expect, test } from "vitest";
import CodeView from "../../../dist/code-view";
import createWrapper from "../../../src/test-utils/dom";

describe("CodeView", () => {
  afterEach(() => {
    cleanup();
  });
  test("correctly renders component content", () => {
    render(<CodeView content={"Hello World"}></CodeView>);
    const wrapper = createWrapper().findCodeView()!;
    expect(wrapper!.findContent().getElement().textContent).toBe("Hello World");
  });

  test("correctly renders copy button slot", () => {
    render(<CodeView content={"Hello World"} copyButton={<button>Copy</button>}></CodeView>);
    const wrapper = createWrapper().findCodeView()!;
    expect(wrapper!.findCopyButtonSlot().getElement().innerHTML).toBe("<button>Copy</button>");
  });

  test("correctly renders line numbers", () => {
    render(<CodeView content={`Hello\nWorld\n!`} lineNumbers={true}></CodeView>);
    const wrapper = createWrapper().findCodeView()!;
    expect(wrapper!.findLineNumbers().getElement().textContent).toBe("123");
  });

  test("correctly tokenizes content if highlight is set", () => {
    render(
      <CodeView content={"<div>Hello</div>"} highlight={(code) => <div className="tokenized">{code}</div>}></CodeView>,
    );
    const wrapper = createWrapper().findCodeView()!;
    expect(wrapper!.findContent().getElement().innerHTML).toContain('class="tokenized"');
  });
});
