import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
  build: {
    sourcemap: true,
    target: "modules",
    lib: {
      entry: ["src/index.ts", "src/clock/Clock.svelte", "src/counter/Counter.svelte"],
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
