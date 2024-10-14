import { TailwindConfig } from "tailwind-config/tailwind.config";
import nextUIConfig from "ui/tailwind.config";

const config: Partial<TailwindConfig> = {
  presets: [nextUIConfig as TailwindConfig],
};

export default config;
