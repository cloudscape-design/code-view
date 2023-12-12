import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/** @type {import('vite').UserConfig} */
export default defineConfig({
  root: "./demo",
  base: "./",
  plugins: [react({ fastRefresh: false })],
  resolve: {
    alias: {
      "@amzn/awsui-community-code-view": __dirname + "/dist",
    },
  },
  build: {
    outDir: "../build/static",
  },
});
