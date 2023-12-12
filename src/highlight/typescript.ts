import { TypeScriptHighlightRules } from "ace-code/src/mode/typescript_highlight_rules";
import { createHighlight } from "./index.js";

export default createHighlight(new TypeScriptHighlightRules());
