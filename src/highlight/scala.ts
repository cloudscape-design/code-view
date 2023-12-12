import { ScalaHighlightRules } from "ace-code/src/mode/scala_highlight_rules";
import { createHighlight } from "./index.js";

export default createHighlight(new ScalaHighlightRules());