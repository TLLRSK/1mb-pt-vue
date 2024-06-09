import { defineConfig } from "vite";
import { fileURLToPath, URL } from "url";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) =>
            ["swiper-slide", "swiper-container"].includes(tag),
        },
      },
    }),
  ],
  test: {
    globals: true,
    environment: "happy-dom",
  },
});
