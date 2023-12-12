import React, { useState } from "react";
import Button from "@amzn/awsui-components-react-v3/polaris/button";
import Popover from "@amzn/awsui-components-react-v3/polaris/popover";
import StatusIndicator from "@amzn/awsui-components-react-v3/polaris/status-indicator";

export interface CopyButtonProps {
  /**
   * Content to put into clipboard
   */
  content: string;

  /**
   * Aria label for the button
   */
  buttonAriaLabel: string;

  /**
   * Text to display in case of successful copy
   */
  successText: string;

  /**
   * Text to display when copy fails
   */
  errorText: string;
}

export default function CopyButton({ content, buttonAriaLabel, successText, errorText }: CopyButtonProps) {
  const [copyResult, setResult] = useState<"pending" | "success" | "error">("pending");
  return (
    <Popover
      size="small"
      position="top"
      triggerType="custom"
      dismissButton={false}
      renderWithPortal={true}
      content={(() => {
        switch (copyResult) {
          case "pending":
            return "waiting for copy";
          case "error":
            return <StatusIndicator type="error">{errorText}</StatusIndicator>;
          case "success":
            return <StatusIndicator type="success">{successText}</StatusIndicator>;
        }
      })()}
    >
      <Button
        iconName="copy"
        variant="icon"
        ariaLabel={buttonAriaLabel}
        onClick={() => {
          setResult("pending");
          navigator.clipboard.writeText(content).then(
            () => setResult("success"),
            () => setResult("error")
          );
        }}
      />
    </Popover>
  );
}
