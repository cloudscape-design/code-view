import React, { useEffect, useState } from "react";
import Box from "@cloudscape-design/components/box";
import Header from "@cloudscape-design/components/header";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Toggle from "@cloudscape-design/components/toggle";
import { Navigation } from "./navigation";
import { createRoot } from "react-dom/client";
import { applyMode, Mode } from "@cloudscape-design/global-styles";
import "@cloudscape-design/global-styles/index.css";

import { Demos } from "./demos";
import Docs from "./docs";
import "./styles.module.scss";

function App() {
  const [dark, setDark] = useState(false);

  useEffect(
    () => applyMode(dark ? Mode.Dark : Mode.Light, document.documentElement),
    [dark]
  );

  return (
    <Box margin="m">
      <Navigation />
      <SpaceBetween size="m">
        <Header
          variant="h1"
          actions={
            <SpaceBetween size="xs" direction="horizontal">
              <Toggle
                checked={dark}
                onChange={(event) => setDark(event.detail.checked)}
              >
                Dark mode
              </Toggle>
            </SpaceBetween>
          }
        >
          Code view component
        </Header>
        <Docs />
        <Demos />
      </SpaceBetween>
    </Box>
  );
}

createRoot(document.getElementById("app")!).render(<App />);
