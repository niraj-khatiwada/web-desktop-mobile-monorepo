import tailwindConfig from 'tailwind-config/tailwind.config';
import { type Config } from 'tailwindcss';

// Font family name must be same as the font file name in mobile.
const fontFamily = Object.keys(
  tailwindConfig?.theme?.extend?.fontFamily ?? {},
).reduce((a: Record<string, string>, c) => {
  a[c] = c;
  return a;
}, {});

const config: Config = {
  presets: [require('nativewind/preset'), tailwindConfig],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily,
    },
  },
};

export default config;
