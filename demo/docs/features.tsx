import React from "react";
import Header from "@cloudscape-design/components/header";
import Box from "@cloudscape-design/components/box";
import { CodeSnippet } from "./code-snippet";
import { copyToClipboard, highlight, lineNumbers, simple } from "../snippets";

export function Features() {
  return (
    <div id="features">
      <Header>Features</Header>

      <Box variant="p">
        By default this component only renders monospace text with a background
      </Box>
      <CodeSnippet {...simple} />

      <Box variant="p">
        However, you can add syntax highlight (supports dark mode out of the
        box)
      </Box>
      <CodeSnippet {...highlight} />

      <Box variant="p">...and line numbers</Box>
      <CodeSnippet {...lineNumbers} />

      <Box variant="p">You can also attach a copy to clipboard button</Box>
      <CodeSnippet {...copyToClipboard} />
    </div>
  );
}
