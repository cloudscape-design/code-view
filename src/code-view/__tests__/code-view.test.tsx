// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { cleanup, getByText, render } from "@testing-library/react";
import { afterEach, describe, expect, test } from "vitest";

import CodeView from "../../../lib/components/code-view";
import typescriptHighlightRules from "../../../lib/components/code-view/highlight/typescript";
import createWrapper from "../../../lib/components/test-utils/dom";

import styles from "../../../lib/components/code-view/styles.css.js";

describe("CodeView", () => {
  afterEach(() => {
    cleanup();
  });
  test("correctly renders component content", () => {
    render(<CodeView content={"Hello World"}></CodeView>);
    const wrapper = createWrapper()!.findCodeView();
    expect(wrapper!.findContent().getElement().textContent).toBe("Hello World");
  });

  test("correctly renders copy button slot", () => {
    render(<CodeView content={"Hello World"} actions={<button>Copy</button>}></CodeView>);
    const wrapper = createWrapper()!.findCodeView();
    expect(wrapper!.findActions()!.getElement().innerHTML).toBe("<button>Copy</button>");
  });

  test("correctly renders line numbers", () => {
    render(<CodeView content={`Hello\nWorld\n!`} lineNumbers={true}></CodeView>);
    const wrapper = createWrapper()!.findCodeView();
    expect(wrapper!.findByClassName(styles["line-numbers"])!.getElement()).toHaveTextContent("123");
  });

  test("correctly renders aria-label", () => {
    render(<CodeView content={`Hello\nWorld\n!`} ariaLabel="Code snippet"></CodeView>);
    const wrapper = createWrapper()!.findCodeView();
    expect(wrapper!.getElement()).toHaveAttribute("aria-label", "Code snippet");
    expect(wrapper!.getElement()).toHaveAttribute("role", "region");
  });

  test("correctly renders aria-labelledby", () => {
    render(<CodeView content={`Hello\nWorld\n!`} ariaLabelledby="some-id"></CodeView>);
    const wrapper = createWrapper()!.findCodeView();
    expect(wrapper!.getElement()).toHaveAttribute("aria-labelledby", "some-id");
    expect(wrapper!.getElement()).toHaveAttribute("role", "region");
  });

  test("renders no role if no aria labels are present", () => {
    render(<CodeView content={`Hello\nWorld\n!`}></CodeView>);
    const wrapper = createWrapper()!.findCodeView();
    expect(wrapper!.getElement()).not.toHaveAttribute("role");
  });

  test("correctly tokenizes content if highlight is set", () => {
    render(
      <CodeView
        content={"<div>Hello</div>"}
        highlight={(code: string) => <div className="tokenized">{code}</div>}
      ></CodeView>,
    );
    const wrapper = createWrapper().findCodeView()!;
    expect(wrapper!.findContent().getElement().innerHTML).toContain('class="tokenized"');
  });

  test("correctly tokenizes content if highlight is set to language rules", () => {
    render(<CodeView content={'const hello: string = "world";'} highlight={typescriptHighlightRules}></CodeView>);
    const wrapper = createWrapper().findCodeView()!;
    const element = wrapper!.findContent().getElement();

    // Check that the content is tokenized following typescript rules.
    expect(getByText(element, "const")).toHaveClass("ace_type");
    expect(getByText(element, "hello")).toHaveClass("ace_identifier");
    expect(getByText(element, "string")).toHaveClass("ace_type");
    expect(getByText(element, '"world"')).toHaveClass("ace_string");
  });
});
