import React from "react";
import ExpandableSection from "@cloudscape-design/components/expandable-section";
import CodeView from "../../dist/code-view";
import jsHighlight from "../../dist/highlight/javascript";
import SpaceBetween from "@cloudscape-design/components/space-between";

interface CodeSnippetProps {
  Component: React.ComponentType;
  source: string;
}

export function CodeSnippet({ Component, source }: CodeSnippetProps) {
  return (
    <>
      <Component />
      <ExpandableSection headerText="Source code">
        <SpaceBetween size="s">
          <CodeView highlight={jsHighlight} content={source}></CodeView>
        </SpaceBetween>
      </ExpandableSection>
    </>
  );
}
