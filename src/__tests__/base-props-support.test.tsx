// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { render } from "@testing-library/react";
import { ReactElement } from "react";
import { describe, expect, test } from "vitest";
import * as components from "../../lib/components";
import { defaultProps } from "./default-props";

describe(`base props support for code-view`, () => {
  const Component = components.CodeView;
  const props = defaultProps["code-view" as keyof typeof defaultProps];

  function renderComponent(ui: ReactElement) {
    return render(ui);
  }

  test("should allow data-attributes", () => {
    const { container } = renderComponent(<Component {...props} data-testid="example" />);
    expect(container.firstElementChild).toHaveAttribute("data-testid", "example");
  });

  test("should not allow id", () => {
    // @ts-expect-error id is not supported
    const { container } = renderComponent(<Component {...props} id="example" />);
    expect(container.querySelector("#example")).toBeNull();
  });

  test("should not allow className", () => {
    // @ts-expect-error className is not supported
    const { container } = renderComponent(<Component {...props} className="example" />);
    expect(container.querySelector(".example")).toBeNull();
  });

  test("should not allow arbitrary attributes", () => {
    const { container } = renderComponent(<Component {...props} not-allowed={true} />);
    expect(container.querySelector("[not-allowed]")).toBeNull();
  });

  test("data- properties should only apply to one element", () => {
    const { container } = renderComponent(<Component {...props} data-testid="data" />);
    expect(container.querySelectorAll("[data-testid=data]")).toHaveLength(1);
  });
});
