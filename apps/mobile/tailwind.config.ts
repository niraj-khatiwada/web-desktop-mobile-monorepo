import tailwindConfig from 'tailwind-config/tailwind.config';
import { type Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset'), tailwindConfig],
};

export default config;
