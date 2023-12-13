// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

export interface CodeViewProps {
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
   * An optional slot to display a copy button.
   *
   */
  copyButton?: React.ReactNode;

  /**
   * A function to perform custom syntax highlighting.
   *
   */
  highlight?: (code: string) => React.ReactNode;
}
