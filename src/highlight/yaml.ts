import { YamlHighlightRules } from "ace-code/src/mode/yaml_highlight_rules";
import { createHighlight } from "./index.js";

export default createHighlight(new YamlHighlightRules());