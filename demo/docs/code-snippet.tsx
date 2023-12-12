// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import ExpandableSection from "@cloudscape-design/components/expandable-section";
import SpaceBetween from "@cloudscape-design/components/space-between";

import CodeView from "../../dist/code-view";
import jsHighlight from "../../dist/highlight/javascript";

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
