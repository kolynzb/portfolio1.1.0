import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        speakers: resolve(__dirname, "src/pages/speakers.html"),
        about: resolve(__dirname, "src/pages/about.html"),
        futureofwork: resolve(__dirname, "src/pages/futureofwork.html"),
        program: resolve(__dirname, "src/pages/program.html"),
      },
    },
  },
});
