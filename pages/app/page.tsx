// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { Suspense } from "react";

import { useAppModes } from "@cloudscape-design/build-tools/lib/dev-pages-utils";
import { SpaceBetween, Toggle } from "@cloudscape-design/components";
import { Density, Mode } from "@cloudscape-design/global-styles";

import { pagesMap } from "../pages";
import PageLayout from "./page-layout";

export interface PageProps {
  pageId: string;
}

export default function Page({ pageId }: PageProps) {
  const Component = pagesMap[pageId];
  const { urlParams, setUrlParams } = useAppModes();

  return (
    <PageLayout>
      <Suspense fallback="Loading">
        <SpaceBetween direction="vertical" size="m">
          <a href="/index.html#">Back to all pages</a>
          <SpaceBetween direction="horizontal" size="m">
            <Toggle
              checked={urlParams.mode === Mode.Dark}
              onChange={(event) => setUrlParams({ mode: event.detail.checked ? Mode.Dark : Mode.Light })}
            >
              Dark mode
            </Toggle>
            <Toggle
              checked={urlParams.density === Density.Compact}
              onChange={(event) =>
                setUrlParams({ density: event.detail.checked ? Density.Compact : Density.Comfortable })
              }
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
