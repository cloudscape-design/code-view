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
   * An optional slot to display a button to enable users to perform actions, such as copy or download the code snippet.
   *
   */
  actions?: React.ReactNode;

  /**
   * A function to perform custom syntax highlighting.
   *
   */
  highlight?: (code: string) => React.ReactNode;
}
