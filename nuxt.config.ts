// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@element-plus/nuxt',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],

  css: [
    '~/assets/css/main.css',
    'remixicon/fonts/remixicon.css',
    'aos/dist/aos.css',
  ],

  app: {
    head: {
      title: '金融科技企业官网',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '现代化金融科技企业官网' }
      ]
    }
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: '2025-03-13',
})