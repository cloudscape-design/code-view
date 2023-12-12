import { JavaHighlightRules } from "ace-code/src/mode/java_highlight_rules";
import { createHighlight } from "./index.js";

export default createHighlight(new JavaHighlightRules());