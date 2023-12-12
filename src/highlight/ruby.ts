import { RubyHighlightRules } from "ace-code/src/mode/ruby_highlight_rules";
import { createHighlight } from "./index.js";

export default createHighlight(new RubyHighlightRules());