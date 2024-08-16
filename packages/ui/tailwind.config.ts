import type { Config } from "tailwindcss";
import sharedConfig from "@calorami/tailwind-config";

const config: Pick<Config, "prefix" | "presets" | "content"> = {
  content: ["./**/*"],
  prefix: "ui-",
  presets: [sharedConfig],
};

export default config;
