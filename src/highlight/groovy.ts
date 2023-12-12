import { GroovyHighlightRules } from "ace-code/src/mode/groovy_highlight_rules";
import { createHighlight } from "./index.js";

export default createHighlight(new GroovyHighlightRules());