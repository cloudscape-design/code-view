import { ShHighlightRules } from "ace-code/src/mode/sh_highlight_rules";
import { createHighlight } from "./index.js";

export default createHighlight(new ShHighlightRules());
