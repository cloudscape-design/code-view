import { CssHighlightRules } from "ace-code/src/mode/css_highlight_rules";
import { createHighlight } from "./index.js";

export default createHighlight(new CssHighlightRules());