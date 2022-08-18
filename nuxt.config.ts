import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: [
    '@nuxtjs/google-fonts'
  ],
    modules: [
      '@nuxtjs/tailwindcss',
      '@nuxtjs/supabase'
    ],

      tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        configPath: 'tailwind.config.ts',
        viewer: false,
      },

      googleFonts: {
        // Download so there's no external dependencies
        download: true,
        // FYI: if you change any of these fonts, you have to add overwriting: true to allow the plugin
        // to re- download
        overwriting: true,
        families: {
          "Poppins": {
            wght: [400, 500, 700],
            ital: [400, 500, 700],
          },
        },
      },
})
