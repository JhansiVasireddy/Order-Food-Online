import { fileURLToPath } from "url";
import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tailwindcss from "tailwindcss"; // Add this import
import autoprefixer from "autoprefixer"; // Add this import

// Define __dirname for ES modules
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    css: {
        postcss: {
            plugins: [
                tailwindcss, // Use imported module
                autoprefixer, // Use imported module
            ],
        },
    },
    server: {
        proxy: {
            "/api/proxy/swiggy": {
                target: "https://www.swiggy.com",
                changeOrigin: true,
                rewrite: (path) =>
                    path.replace(/^\/api\/proxy\/swiggy/, ""),
            },
        },
    },
});