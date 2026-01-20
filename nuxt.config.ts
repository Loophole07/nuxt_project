// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Compatibility date (important for Nuxt 4)
  compatibilityDate: '2025-07-15',

  // Enable devtools in development
  devtools: { enabled: true },

  // TailwindCSS module
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
  },

  // Disable SSR for SPA/static site (better for GitHub Pages)
  ssr: false, 

  // App settings
  app: {
    // If your repo is deployed at github.io/username/nuxt_project/
    baseURL: '/nuxt_project/', 
    buildAssetsDir: 'assets',
  },

  // Nitro settings for static build targeting GitHub Pages
  nitro: {
    preset: 'github-pages',
  },


})
