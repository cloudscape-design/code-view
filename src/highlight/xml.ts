import { XmlHighlightRules } from "ace-code/src/mode/xml_highlight_rules";
import { createHighlight } from "./index.js";

export default createHighlight(new XmlHighlightRules());