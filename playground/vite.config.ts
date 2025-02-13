/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    coverage: {
      exclude: ["src/App.tsx", "src/main.tsx"],
      provider: "istanbul",
    },
    globals: true,
    environment: "jsdom",
  },
});
