import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import svgr from "vite-plugin-svgr";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [svgr()],
    ssr: {
      noExternal: ["modern-normalize", "focus-visible"],
    },
    build: {
      target: "esnext",
      minify: "esbuild",
    },
  },
  output: "static",
  build: {
    format: "directory",
  },
});
