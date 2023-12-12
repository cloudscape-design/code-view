import { MarkdownHighlightRules } from "ace-code/src/mode/markdown_highlight_rules";
import { createHighlight } from "./index.js";

export default createHighlight(new MarkdownHighlightRules());