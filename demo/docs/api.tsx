import React from "react";
import Header from "@cloudscape-design/components/header";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Box from "@cloudscape-design/components/box";
import CodeView from "../../dist/code-view";
import jsHighlight from "../../dist/highlight/javascript";
import { tsHighlight } from "./typescript-highlight";

export function Api() {
  return (
    <div id="api">
      <Header>API</Header>
      <SpaceBetween size="m">
        <div id="code-view">
          <Header variant="h3">&lt;CodeView/&gt;</Header>
          <CodeView content={'import CodeView from "@cloudscape-design/code-view";'} highlight={jsHighlight} />
          <CodeView
            content={`interface CodeViewProps {
  /**
   * Content to render
   */

  content: string;
  /**
   * Show line numbers
   */

  lineNumbers?: boolean;
  /**
   * Slot for a copy button (separate component, see below) 
   */

  copyButton?: React.ReactNode;
  /**
   * Syntax highlight function (separate import, also see below).
   * It receives the source code as an argument and should return 
   * a highlighted version of it (in HTML format).
   */
  highlight?: (source: string) => string;
}`}
            highlight={tsHighlight}
          />
        </div>

        <div id="copy-button">
          <Header variant="h3">&lt;CopyButton/&gt;</Header>
          <Box variant="p">
            The component works with{" "}
            <Box variant="pre" display="inline">
              &lt;CodeView/&gt;
            </Box>{" "}
            component, as well as standalone in any other context
          </Box>
          <CodeView
            content={'import CopyButton from "@cloudscape-design/code-view/copy-button";'}
            highlight={jsHighlight}
          />
          <CodeView
            content={`interface CopyButtonProps {
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
}`}
            highlight={jsHighlight}
          />
        </div>

        <div id="syntax-highlight">
          <Header variant="h3">Syntax highlight</Header>
          <Box variant="p">
            Syntax highlight is distributed as a separate import to reduce bundle size for consumers who do not need
            this feature
          </Box>

          <Box variant="p">Using a predefined highlight (Javascript, JSON, XML, and YAML are available)</Box>
          <CodeView
            content={`import jsHighlight from "@cloudscape-design/code-view/highlight/javascript";

<CodeView content="your content" highlight={jsHighlight} />`}
            highlight={jsHighlight}
          />

          <Box variant="p">Using your custom (we use CSS as an example)</Box>
          <CodeView
            content={`import { createHighlight } from "@cloudscape-design/code-view/highlight";
import "prismjs/components/prism-css";

<CodeView content="your css" highlight={createHighlight} />
`}
            highlight={jsHighlight}
          />
          <CodeView content={`type CreateHighlightFn = (language: string) => HighlightFn`} highlight={jsHighlight} />
        </div>
      </SpaceBetween>
    </div>
  );
}
