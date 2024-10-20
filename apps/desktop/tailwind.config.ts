import { Config } from 'tailwindcss'
import webAppConfig from 'webapp/tailwind.config'
import nextUIConfig from 'ui/tailwind.config'
import tailwindConfig from 'tailwind-config/tailwind.config'

const config: Config = {
  presets: [webAppConfig, nextUIConfig, tailwindConfig],
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    ...(Array.isArray(webAppConfig.content) ? webAppConfig.content : []),
    ...(Array.isArray(nextUIConfig.content) ? nextUIConfig.content : [])
  ]
}

export default config
