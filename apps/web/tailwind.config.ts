import type { Config } from "tailwindcss";
import sharedConfig from "@calorami/tailwind-config";

const config: Pick<Config, "content" | "presets"> = {
  content: ["./**/*.tsx"],
  presets: [sharedConfig],
};

export default config;
