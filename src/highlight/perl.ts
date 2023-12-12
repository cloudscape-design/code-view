import { PerlHighlightRules } from "ace-code/src/mode/perl_highlight_rules";
import { createHighlight } from "./index.js";

export default createHighlight(new PerlHighlightRules());