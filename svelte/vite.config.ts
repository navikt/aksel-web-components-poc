import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    sourcemap: true,
    target: "modules",
    lib: {
      entry: ["src/index.ts"],
      name: "<<name>>",
    },
  },

  plugins: [
    svelte({
      compilerOptions: {
        customElement: true,
      },
    }),
  ],
});
