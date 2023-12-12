import { createHighlight } from "../../dist/highlight";
import { TypeScriptHighlightRules } from "ace-code/src/mode/typescript_highlight_rules";

export const tsHighlight = createHighlight(new TypeScriptHighlightRules());
