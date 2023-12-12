import { DockerfileHighlightRules } from "ace-code/src/mode/dockerfile_highlight_rules";
import { createHighlight } from "./index.js";

export default createHighlight(new DockerfileHighlightRules());