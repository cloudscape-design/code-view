import { JavaScriptHighlightRules } from "ace-code/src/mode/javascript_highlight_rules";
import { createHighlight } from "./index.js";

export default createHighlight(new JavaScriptHighlightRules());
