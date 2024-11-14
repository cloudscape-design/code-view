// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { Suspense } from "react";
import { useEffect, useState } from "react";

import { SpaceBetween, Toggle } from "@cloudscape-design/components";
import { applyDensity, applyMode, Density, Mode } from "@cloudscape-design/global-styles";

import { pagesMap } from "../pages";
import PageLayout from "./page-layout";

export interface PageProps {
  pageId: string;
}

export default function Page({ pageId }: PageProps) {
  const Component = pagesMap[pageId];
  const [dark, setDark] = useState(false);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    applyMode(dark ? Mode.Dark : Mode.Light, document.documentElement);
  }, [dark]);

  useEffect(() => {
    applyDensity(compact ? Density.Compact : Density.Comfortable, document.documentElement);
  }, [compact]);

  return (
    <PageLayout>
      <Suspense fallback="Loading">
        <SpaceBetween direction="vertical" size="m">
          <a href="/index.html#">Back to all pages</a>
          <SpaceBetween direction="horizontal" size="m">
            <Toggle checked={dark} onChange={(event) => setDark(event.detail.checked)}>
              Dark mode
            </Toggle>
            <Toggle checked={compact} onChange={(event) => setCompact(event.detail.checked)}>
              Compact mode
            </Toggle>
          </SpaceBetween>
        </SpaceBetween>
        <Component />
      </Suspense>
    </PageLayout>
  );
}
