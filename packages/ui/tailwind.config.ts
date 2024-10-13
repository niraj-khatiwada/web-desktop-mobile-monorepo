import { nextui } from "@nextui-org/theme";
import { Config } from "tailwindcss";
import baseConfig from "tailwind-config/tailwind.config";

const config: Partial<Config> = {
  plugins: [nextui()],
  presets: [baseConfig],
  content: [
    "../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "../../node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
};

export default config;
