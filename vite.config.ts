import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";

function copyServerPlugin() {
  return {
    name: "copy-server",
    closeBundle() {
      fs.copyFileSync(
        path.resolve(__dirname, "server.cjs"),
        path.resolve(__dirname, "dist/index.cjs")
      );
    },
  };
}

export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 5000,
    allowedHosts: true,
  },
  plugins: [
    react(),
    copyServerPlugin(),
  ],
  base: "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
