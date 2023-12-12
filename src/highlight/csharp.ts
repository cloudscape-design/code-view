import { CSharpHighlightRules } from "ace-code/src/mode/csharp_highlight_rules";
import { createHighlight } from "./index.js";

export default createHighlight(new CSharpHighlightRules());
