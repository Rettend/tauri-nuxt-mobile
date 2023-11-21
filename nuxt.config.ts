// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
import { internalIpV4 } from 'internal-ip'

export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  ssr: false,
  modules: [
    '@unocss/nuxt',
  ],
  devServer: {
    host: '0.0.0.0',
    port: 3000,
  },
  vite: {
    clearScreen: false,
    server: {
      strictPort: true,
      hmr: {
        host: await internalIpV4(),
        protocol: 'ws',
        port: 3001,
      },
    },
  },
})
