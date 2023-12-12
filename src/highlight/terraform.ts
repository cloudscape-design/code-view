import { TerraformHighlightRules } from "ace-code/src/mode/terraform_highlight_rules";
import { createHighlight } from "./index.js";

export default createHighlight(new TerraformHighlightRules());