import { SwiftHighlightRules } from "ace-code/src/mode/swift_highlight_rules";
import { createHighlight } from "./index.js";

export default createHighlight(new SwiftHighlightRules());