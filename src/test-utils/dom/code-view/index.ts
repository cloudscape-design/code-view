// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
// import componentsWrapper from "@cloudscape-design/components/test-utils/dom";
import { ComponentWrapper } from "@cloudscape-design/test-utils-core/dom";
import * as styles from "../../../code-view/styles.css";

export default class CodeViewWrapper extends ComponentWrapper {
  static rootSelector: string = styles.root;
  findCodeView(): ComponentWrapper {
    return this.findByClassName(CodeViewWrapper.rootSelector)!;
  }
}
