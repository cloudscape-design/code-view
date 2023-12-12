import helloSrc from "./hello?raw";

import Simple from "./simple";
import simpleSrc from "./simple?raw";

import Highlight from "./highlight";
import highlightSrc from "./highlight?raw";

import LineNumbers from "./line-numbers";
import lineNumbersSrc from "./line-numbers?raw";

import CopyToClipboard from "./copy-to-clipboard";
import copyToClipboardSrc from "./copy-to-clipboard?raw";

export const simple = { Component: Simple, source: simpleSrc };
export const highlight = { Component: Highlight, source: highlightSrc };
export const lineNumbers = { Component: LineNumbers, source: lineNumbersSrc };
export const copyToClipboard = { Component: CopyToClipboard, source: copyToClipboardSrc };
export const hello = { source: helloSrc };
