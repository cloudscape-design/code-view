// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { SpaceBetween } from "@cloudscape-design/components";

import { CodeView } from "../../lib/components";
import cppHighlight from "../../lib/components/code-view/highlight/cpp";
import { ScreenshotArea } from "../screenshot-area";

export default function CodeViewPage() {
  return (
    <ScreenshotArea>
      <h1>Code View</h1>
      <SpaceBetween direction="vertical" size="l">
        No wrapping, no line numbers
        <CodeView
          content={`Hello this is a short line.\nHello this is a long line. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\nHello this is another short line.`}
        />
        No wrapping, line numbers
        <CodeView
          lineNumbers={true}
          content={`Hello this is a short line.\nHello this is a long line. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\nHello this is another short line.`}
        />
        Wrapping, no line numbers
        <CodeView
          lineWrapping={true}
          content={`Hello this is a short line.\nHello this is a long line. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\nHello this is another short line.`}
        />
        Wrapping, line numbers
        <CodeView
          lineWrapping={true}
          lineNumbers={true}
          content={`Hello this is a short line.\nHello this is a long line. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\nHello this is another short line.`}
        />
        Full example with indentation and code highlighting
        <CodeView
          lineWrapping={true}
          lineNumbers={true}
          highlight={cppHighlight}
          content={`void UserQuery(map<string, vector<string> > &svmap) {\n    string queryName;\n    cout << "Please enter a family name you want to query: ";\n    cin >> queryName;\n    int i = 0;\n    for (map<string, vector<string> >::iterator itr = svmap.begin(), mapEnd = svmap.end(); itr != mapEnd; ++itr) {\n        i++;\n        if (itr->first == queryName) {\n            cout << "The " << itr->first << " family has " << itr->second.size() << " children: ";\n            for (vector<string>::iterator itrvec = itr->second.begin(), vecEnd = itr->second.end(); itrvec != vecEnd; ++itrvec)\n                cout << *itrvec << " ";\n            break;\n        }\n    }\n    if (i >= svmap.size())\n        cout << "Sorry, the " << queryName << " family is not found." << endl;\n}`}
        />
      </SpaceBetween>
    </ScreenshotArea>
  );
}
