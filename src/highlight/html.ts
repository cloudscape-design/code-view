import { HtmlHighlightRules } from "ace-code/src/mode/html_highlight_rules";
import { createHighlight } from "./index.js";

export default createHighlight(new HtmlHighlightRules());