import { cosmiconfig } from "cosmiconfig";
import { Config } from "./types";

const MODULE_NAME = "cli-template";

export const defaultConfig: Config = {
  include: ["**/*.ts"],
  exclude: ["**/*.test.ts", "**/*.spec.tsx"],
};

export async function loadConfig(): Promise<Config> {
  const explorer = cosmiconfig(MODULE_NAME);

  try {
    const result = await explorer.search();
    console.log("Found config in:", result?.filepath);

    if (result && !result.isEmpty) {
      const mergedConfig = {
        ...defaultConfig,
        ...result.config,
      };
      return mergedConfig;
    }
  } catch (error) {
    console.error("Error loading configuration:", error);
  }

  console.log("Using default config:", defaultConfig);
  return defaultConfig;
}
