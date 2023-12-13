// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { Toggle } from "@cloudscape-design/components";
// import { Mode, applyMode } from "@cloudscape-design/global-styles";
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
    import("@cloudscape-design/global-styles")
      .then(({ Mode, applyMode }) => {
        applyMode(dark ? Mode.Dark : Mode.Light, document.documentElement);
      })
      .catch((error) => console.error("Failed to load module", error));
  }, [dark]);

  return (
    <PageLayout>
      <Suspense fallback="Loading">
        <Toggle checked={dark} onChange={(event) => setDark(event.detail.checked)}>
          Dark mode
        </Toggle>
        <Component />
      </Suspense>
    </PageLayout>
  );
}
