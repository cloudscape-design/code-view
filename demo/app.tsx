import React, { useEffect, useState } from "react";
import Box from "@amzn/awsui-components-react-v3/polaris/box";
import Header from "@amzn/awsui-components-react-v3/polaris/header";
import SpaceBetween from "@amzn/awsui-components-react-v3/polaris/space-between";
import Toggle from "@amzn/awsui-components-react-v3/polaris/toggle";
import { Navigation } from "./navigation";
import { createRoot } from "react-dom/client";
import { applyMode, isVisualRefreshActive, Mode } from "@amzn/awsui-global-styles";
import "@amzn/awsui-global-styles/polaris.css";

import { Demos } from "./demos";
import Docs from "./docs";
import "./styles.module.scss";

if (new URLSearchParams(location.search).get("visual-refresh") === "true") {
  document.documentElement.classList.add("awsui-visual-refresh");
}

function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => applyMode(dark ? Mode.Dark : Mode.Light, document.documentElement), [dark]);

  return (
    <Box margin="m">
      <Navigation />
      <SpaceBetween size="m">
        <Header
          variant="h1"
          actions={
            <SpaceBetween size="xs" direction="horizontal">
              <Toggle
                checked={isVisualRefreshActive()}
                onChange={(event) => {
                  const params = new URLSearchParams(location.search);
                  if (event.detail.checked) {
                    params.set("visual-refresh", "true");
                  } else {
                    params.delete("visual-refresh");
                  }
                  location.search = params.toString();
                }}
              >
                Visual refresh
              </Toggle>
              <Toggle checked={dark} onChange={(event) => setDark(event.detail.checked)}>
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
