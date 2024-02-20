import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": "http://localhost:4003",
    },
  },
  resolve: {
    //상대경로로 가는건 핸들링하기 어려움(../Sample)
    //절대경로로 접근하기!!
    alias: [
      { find: "~/components", replacement: "/src/components" },
      { find: "~/lib", replacement: "/src/lib" },
      { find: "~/routers", replacement: "/src/routers" },
      { find: "~/routes", replacement: "/src/routes" },
      { find: "~/store", replacement: "/src/store" },
    ],
  },
});
