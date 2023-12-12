import React from "react";

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
