import { fileURLToPath } from "node:url";
import { mergeConfig, defineConfig, configDefaults } from "vitest/config";
import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      coverage: {
        enabled: true,
        thresholds: {
          branches: 100,
        },
        exclude: ["**/index.ts", "main.ts", "app/**"],
      },
      globals: true,
      setupFiles: ["./src/SetupTests.ts"],
      environment: "jsdom",
      exclude: [...configDefaults.exclude, "e2e/**"],
      root: fileURLToPath(new URL("./src", import.meta.url)),
    },
  }),
);
