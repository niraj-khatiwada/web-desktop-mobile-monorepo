import { Config } from 'tailwindcss'
import nextUIConfig from 'ui/tailwind.config'
import tailwindConfig from 'tailwind-config/tailwind.config'

const config: Partial<Config> = {
  presets: [nextUIConfig as Config, tailwindConfig],
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    ...(Array.isArray(nextUIConfig.content) ? nextUIConfig.content : [])
  ]
}

export default config
