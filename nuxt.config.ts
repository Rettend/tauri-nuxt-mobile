// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  ssr: false,
  modules: [
    '@unocss/nuxt',
  ],
  vite: {
    clearScreen: false,
    server: {
      strictPort: true,
      hmr: {
        host: '0.0.0.0',
        protocol: 'ws',
        port: 5173,
      },
    },
  },
})
