import { SqlHighlightRules } from "ace-code/src/mode/sql_highlight_rules";
import { createHighlight } from "./index.js";

export default createHighlight(new SqlHighlightRules());