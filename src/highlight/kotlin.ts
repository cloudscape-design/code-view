import { KotlinHighlightRules } from "ace-code/src/mode/kotlin_highlight_rules";
import { createHighlight } from "./index.js";

export default createHighlight(new KotlinHighlightRules());