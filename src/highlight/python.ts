import { PythonHighlightRules } from "ace-code/src/mode/python_highlight_rules";
import { createHighlight } from "./index.js";

export default createHighlight(new PythonHighlightRules());