// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { ComponentWrapper, ElementWrapper } from "@cloudscape-design/test-utils-core/dom";
import styles from "../../../code-view/styles.selectors.js";

export default class CodeViewWrapper extends ComponentWrapper {
  static rootSelector: string = styles.root;
  findCodeView(): ComponentWrapper {
    return this.findByClassName(CodeViewWrapper.rootSelector)!;
  }

  findContent(): ElementWrapper {
    return this.findByClassName(styles.code)!;
  }

  findCopyButtonSlot(): ElementWrapper | null {
    return this.findByClassName(styles["copy-button"])!;
  }
}
