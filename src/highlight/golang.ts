import { GolangHighlightRules } from "ace-code/src/mode/golang_highlight_rules";
import { createHighlight } from "./index.js";

export default createHighlight(new GolangHighlightRules());