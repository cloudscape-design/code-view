import React from "react";
import Header from "@amzn/awsui-components-react-v3/polaris/header";
import CodeView from "../../dist/code-view";
import jsHighlight from "../../dist/highlight/javascript";
import jsonHighlight from "../../dist/highlight/json";
import yamlHighlight from "../../dist/highlight/yaml";
import configYml from "../fixtures/config.yml?raw";
import codeJs from "../fixtures/code.js?raw";
import dataJson from "../fixtures/data.json?raw";

export default function Highlight() {
  return (
    <>
      <Header description="You can include any prism.js syntax highlight">Syntax highlight</Header>
      <Header variant="h3">Javascript</Header>
      <CodeView content={codeJs} highlight={jsHighlight} />
      <Header variant="h3">JSON</Header>
      <CodeView content={dataJson} highlight={jsonHighlight} />
      <Header variant="h3">YAML</Header>
      <CodeView content={configYml} highlight={yamlHighlight} />
    </>
  );
}
