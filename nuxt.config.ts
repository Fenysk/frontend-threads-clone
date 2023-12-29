import { resolve } from 'path'

export default defineNuxtConfig({

  alias: {
    '@': resolve(__dirname, '/'),
  },

  css: ['~/assets/scss/main.scss'],

  devtools: { enabled: false },

  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
  ],

  runtimeConfig: {
    apiSecret: 'mon-secret',

    public: {
      API_URL: 'http://localhost:3621'
    }
  }

})
