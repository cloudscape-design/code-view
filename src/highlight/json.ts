import { JsonHighlightRules } from "ace-code/src/mode/json_highlight_rules";
import { createHighlight } from "./index.js";

export default createHighlight(new JsonHighlightRules());