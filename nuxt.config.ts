// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'SOOSMART Group - Cybersécurité & Réseaux',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'SOOSMART Group - Expert en cybersécurité et réseaux. Services professionnels et formations spécialisées.' 
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/identity.png' }
      ]
    }
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt'
  ],

  devtools: { enabled: false },
  compatibilityDate: '2025-02-07'
})
