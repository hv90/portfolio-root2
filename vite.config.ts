import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: "public",
  build: {
    rollupOptions: {
      external: ["/shoelace/dist/assets/icons/list.svg"],
    },
  },
});
