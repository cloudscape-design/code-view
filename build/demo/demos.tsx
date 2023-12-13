// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import Header from "@cloudscape-design/components/header";
import StatusIndicator from "@cloudscape-design/components/status-indicator";
import Tabs, { TabsProps } from "@cloudscape-design/components/tabs";
// eslint-disable-next-line no-restricted-imports
import React, { Suspense } from "react";
import CodeView from "../dist/code-view";

import codeJs from "./fixtures/code.js?raw";
function LazyLoad({ loader }: { loader: () => Promise<{ default: React.ComponentType }> }) {
  const Component = React.lazy(loader);
  return (
    <Suspense fallback={<StatusIndicator type="loading">Loading view</StatusIndicator>}>
      <Component />
    </Suspense>
  );
}

const examples: Array<TabsProps.Tab> = [
  {
    id: "simple",
    label: "Simple",
    content: (
      <>
        <Header description="This demo only renders the content with monospace font without any highlight or other extra features">
          Simple demo
        </Header>
        <CodeView content={codeJs} />
      </>
    ),
  },
  {
    id: "copy",
    label: "Copyable",
    content: <LazyLoad loader={() => import("./components/copyable")} />,
  },
  {
    id: "lines",
    label: "Line numbers",
    content: (
      <>
        <Header description="The component may render line numbers, if needed">Line numbers</Header>
        <CodeView lineNumbers={true} content={codeJs} />
      </>
    ),
  },
  {
    id: "horizontal-scroll",
    label: "Horizontal scroll",
    content: <LazyLoad loader={() => import("./components/horizontal-scroll")} />,
  },
  {
    id: "vertical-scroll",
    label: "Vertical scroll",
    content: <LazyLoad loader={() => import("./components/vertical-scroll")} />,
  },
  {
    id: "highlight",
    label: "Syntax highlight",
    content: <LazyLoad loader={() => import("./components/highlight")} />,
  },
  {
    id: "all",
    label: "All together",
    content: <LazyLoad loader={() => import("./components/full")} />,
  },
];

export function Demos() {
  return (
    <div id="demos">
      <Tabs variant="container" tabs={examples} />
    </div>
  );
}
