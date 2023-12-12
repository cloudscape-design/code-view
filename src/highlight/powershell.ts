import { PowershellHighlightRules } from "ace-code/src/mode/powershell_highlight_rules";
import { createHighlight } from "./index.js";

export default createHighlight(new PowershellHighlightRules());