import { resolve } from 'path'

export default defineNuxtConfig({

  alias: {
    '@': resolve(__dirname, '/'),
  },

  css: ['~/assets/scss/main.scss'],

  devtools: { enabled: false },

  modules: [
    "@nuxtjs/tailwindcss"
  ]

})