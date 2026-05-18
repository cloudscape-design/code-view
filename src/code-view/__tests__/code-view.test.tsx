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
  test("correctly renders simple content", () => {
    const input = "Hello World";
    render(<CodeView content={input}></CodeView>);
    const wrapper = createWrapper()!.findCodeView()!;
    expect(wrapper.findContent().getElement().textContent).toBe(input);
  });

  test("correctly renders multi line content", () => {
    const input = `# Hello World\n\nThis is a markdown example.`;
    render(<CodeView content={input}></CodeView>);
    const wrapper = createWrapper()!.findCodeView()!;
    expect(wrapper.findContent().getElement().textContent).toBe(input);
  });

  test("preserves a trailing newline when present in the input", () => {
    const input = "a\nb\n";
    render(<CodeView content={input}></CodeView>);
    const wrapper = createWrapper()!.findCodeView()!;
    expect(wrapper.findContent().getElement().textContent).toBe(input);
  });

  test("correctly renders table markup with line numbers", () => {
    render(
      <CodeView
        lineNumbers={true}
        i18nStrings={{ lineNumberLabel: "Line number", codeLabel: "Code" }}
        content={`# Hello World\n\nThis is a markdown example.`}
      />,
    );
    const wrapper = createWrapper()!.findCodeView()!;
    const table = wrapper.find("table")!.getElement();
    expect(table).not.toHaveAttribute("role");
    const lineNumberColumn = wrapper.find("th:nth-child(1)")!.getElement();
    expect(lineNumberColumn).toHaveTextContent("Line number");
    const contentColumn = wrapper.find("th:nth-child(2)")!.getElement();
    expect(contentColumn).toHaveTextContent("Code");
    const lineNumberCell = wrapper.find("td:nth-child(1)")!.getElement();
    expect(lineNumberCell).not.toHaveAttribute("aria-hidden", "true");
  });

  test("correctly renders copy button slot", () => {
    render(<CodeView content={"Hello World"} actions={<button>Copy</button>}></CodeView>);
    const wrapper = createWrapper()!.findCodeView();
    expect(wrapper!.findActions()!.getElement().innerHTML).toBe("<button>Copy</button>");
  });

  test("correctly renders line numbers", () => {
    render(<CodeView content={`Hello\nWorld\n!`} lineNumbers={true}></CodeView>);
    const wrapper = createWrapper()!.findCodeView();
    expect(wrapper!.findAllByClassName(styles["line-number"])[0]!.getElement()).toHaveTextContent("1");
    expect(wrapper!.findAllByClassName(styles["line-number"])[1]!.getElement()).toHaveTextContent("2");
    expect(wrapper!.findAllByClassName(styles["line-number"])[2]!.getElement()).toHaveTextContent("3");
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
    expect(wrapper!.findContent().getElement().innerHTML).toContain("tokenized");
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

  test("renders highlighted content without trailing newline", () => {
    const input = 'const hello: string = "world";';
    render(<CodeView content={input} highlight={typescriptHighlightRules}></CodeView>);
    const wrapper = createWrapper()!.findCodeView()!;
    expect(wrapper.findContent().getElement().textContent).toBe(input);
  });

  test("sets nowrap class to line if linesWrapping undefined", () => {
    render(<CodeView content={"Hello World"}></CodeView>);
    const wrapper = createWrapper().findCodeView()!;
    const element = wrapper!.findContent().getElement();
    expect(element.outerHTML).toContain("code-line-nowrap");
  });

  test("sets nowrap class to line if linesWrapping false", () => {
    render(<CodeView wrapLines={false} content={"Hello World"}></CodeView>);
    const wrapper = createWrapper().findCodeView()!;
    const element = wrapper!.findContent().getElement();
    expect(element.outerHTML).toContain("code-line-nowrap");
  });

  test("sets wrap class to line if linesWrapping true", () => {
    render(<CodeView wrapLines={true} content={"Hello World"}></CodeView>);
    const wrapper = createWrapper().findCodeView()!;
    const element = wrapper!.findContent().getElement();
    expect(element.outerHTML).toContain("code-line-wrap");
  });
});
