import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        details: resolve(__dirname, "src/pages/portfolio-details.html"),
      },
    },
  },
});
