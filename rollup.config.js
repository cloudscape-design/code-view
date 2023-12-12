import typescript from "@rollup/plugin-typescript";
import { vanillaExtractPlugin } from "@vanilla-extract/rollup-plugin";

/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
  input: {
    "internal/copy-button/index": "./src/internal/copy-button/index.tsx",
    "code-view/index": "./src/code-view/index.tsx",
  },
  output: {
    sourcemap: true,
    dir: "dist",
  },
  external: (id) => !(/\.vanilla\.css/.test(id) || /^([.\/])/.test(id)),
  plugins: [typescript(), vanillaExtractPlugin()],
};
export default config;
