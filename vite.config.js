import { defineConfig } from "vite";
import { resolve } from "path";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
  plugins: [svelte()],
  rollupDedupe: ["svelte"],
  root: "./src/",
  publicDir: "../public/",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    copyPublicDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        404: resolve(__dirname, "src/404.html"),
      },
    },
  },
});
