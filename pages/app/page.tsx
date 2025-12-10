// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { Suspense } from "react";

import { SpaceBetween, Toggle } from "@cloudscape-design/components";
import { Density, Mode } from "@cloudscape-design/global-styles";

import { pagesMap } from "../pages";
import PageLayout from "./page-layout";
import useModes from "./use-modes";

export interface PageProps {
  pageId: string;
}

export default function Page({ pageId }: PageProps) {
  const Component = pagesMap[pageId];
  const { mode, density, setParams } = useModes();

  return (
    <PageLayout>
      <Suspense fallback="Loading">
        <SpaceBetween direction="vertical" size="m">
          <a href="/index.html#">Back to all pages</a>
          <SpaceBetween direction="horizontal" size="m">
            <Toggle
              checked={mode === Mode.Dark}
              onChange={(event) => setParams({ mode: event.detail.checked ? Mode.Dark : Mode.Light })}
            >
              Dark mode
            </Toggle>
            <Toggle
              checked={density === Density.Compact}
              onChange={(event) => setParams({ density: event.detail.checked ? Density.Compact : Density.Comfortable })}
            >
              Compact mode
            </Toggle>
          </SpaceBetween>
        </SpaceBetween>
        <Component />
      </Suspense>
    </PageLayout>
  );
}
