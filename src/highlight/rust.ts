import { RustHighlightRules } from "ace-code/src/mode/rust_highlight_rules";
import { createHighlight } from "./index.js";

export default createHighlight(new RustHighlightRules());