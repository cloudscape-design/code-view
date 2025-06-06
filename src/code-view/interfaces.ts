// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

export interface CodeViewProps {
  /**
   * Adds an `aria-label` to the component. Use this label when there is not enough context around the code snippet to describe its purpose or content.
   */
  ariaLabel?: string;

  /**
   * Adds `aria-labelledby` to the component. Use this property to reference the ID of an existing element that provides a descriptive label for the code snippet.
   */
  ariaLabelledby?: string;

  /**
   * The code content to be displayed.
   */
  content: string;

  /**
   * Controls the display of line numbers.
   *
   * Defaults to `false`.
   */
  lineNumbers?: boolean;

  /**
   * Controls whether line-wrapping is enabled when content would overflow the component.
   *
   * Defaults to `false`.
   */
  wrapLines?: boolean;

  /**
   * An optional slot to display a button to enable users to perform actions, such as copy or download the code snippet.
   *
   */
  actions?: React.ReactNode;

  /**
   * A function to perform custom syntax highlighting.
   */
  highlight?: (code: string) => React.ReactNode;

  /**
   * An object containing all the necessary localized strings required by the component. The object should contain:
   *
   * * `lineNumberLabel` - Label for the column that displays line numbers (when line numbers are visible)
   * * `codeLabel` - Label for the column that displays the code content (when line numbers are visible)
   */
  i18nStrings?: CodeViewProps.I18nStrings;
}

export namespace CodeViewProps {
  export interface I18nStrings {
    lineNumberLabel?: string;
    codeLabel?: string;
  }
}
