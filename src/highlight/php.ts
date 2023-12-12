import { PhpHighlightRules } from "ace-code/src/mode/php_highlight_rules";
import { createHighlight } from "./index.js";

export default createHighlight(new PhpHighlightRules());