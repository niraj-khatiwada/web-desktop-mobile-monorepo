# Web, Desktop & Mobile Monorepo

### Apps

- `web`: FullStack Meta app that uses TanStack Start for SSR and SSG
- `desktop`: An SPA that works for both web and desktop using Electron-Vite
- `mobile`: An Expo project for mobile

### Stack

- Vite as a Bundler for both web & desktop
- Tanstack Router for file based routing for web & desktop
- TanStack Start as a meta framework for SSR and SSG
- Expo & Expo Router for mobile
- TailwindCSS for web, desktop & mobile as a design system. Mobile uses NativeWind that shares the same tailwind config as web.
- pnpm workspace for monorepo setup
- Nx as a unified build system (Can be replaced with Turbo. Just remove nx package and add Turbo and it's config file)

![alt text](./git-assets/preview.png)

Note:
There's a branch called [web-spa-ssr](https://github.com/niraj-khatiwada/web-desktop-mobile-monorepo/tree/web-spa-ssr) that consists of web and desktop as 2 different apps which share the same router logic as a package. The shared router logic will be SPA on the Electron side but the web is actually an SSR(using TanStack Start). You cannot do any server related logic on the shared router package since it will break the Electron side but you can do those in the `web` app only side since that web is deployed as a server. But, after careful consideration, I found that you might really not need that kind of setup(mainly due to complexity). All the SPA stuff will work as it is on web and desktop platform. If you need the server and SSR stuff, just fire up another TanStack Start app and do there instead. Since these SSR stuff will only go to the web side, there's no point in trying to make it work with this setup. This will greatly reduce the complexity of the project as well.
With this setup, your web app will be hosted on let's say `app.acme.com`. This will use the same SPA that works for both web and desktop. But, for pages like `/`, `/blogs`, `/about`, etc that needs to be an SSR or SSG, we will use meta framework app `web` that will be hosted on base `acme.com`. So `app.acme.com` will be shared for both web and desktop using a SPA. But `acme.com` will only be for web using meta framework.
