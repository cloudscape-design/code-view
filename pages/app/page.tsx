// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { SpaceBetween, Toggle } from "@cloudscape-design/components";
import { Mode, applyMode } from "@cloudscape-design/global-styles";
import { Suspense } from "react";
import { useEffect, useState } from "react";
import { pagesMap } from "../pages";
import PageLayout from "./page-layout";

export interface PageProps {
  pageId: string;
}

export default function Page({ pageId }: PageProps) {
  const Component = pagesMap[pageId];
  const [dark, setDark] = useState(false);

  useEffect(() => {
    applyMode(dark ? Mode.Dark : Mode.Light, document.documentElement);
  }, [dark]);

  return (
    <PageLayout>
      <Suspense fallback="Loading">
        <SpaceBetween direction="vertical" size="m">
          <a href="/index.html#">Back to all pages</a>
          <Toggle checked={dark} onChange={(event) => setDark(event.detail.checked)}>
            Dark mode
          </Toggle>
        </SpaceBetween>
        <Component />
      </Suspense>
    </PageLayout>
  );
}
