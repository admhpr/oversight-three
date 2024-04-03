// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page', mode: 'out-in', duration: 300 },
  },
  content: {
    highlight: {
      theme: {
        default: 'github-dark',
      },
    },
  },
  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'dark',
  },
  typescript: {
    typeCheck: true,
  },
  modules: ['@nuxt/content', '@nuxtjs/color-mode', '@nuxtjs/tailwindcss'],
});
