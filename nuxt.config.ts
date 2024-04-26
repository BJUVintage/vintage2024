// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content'
  ],
  app: {
    head: {
      title: 'Vintage 2024',
      meta: [
        { charset: 'utf-8'  },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {name: 'authorization', content: 'Sm5ncmV6cnliYSBGbGFxdnBuZ3I='},
      ],
    }
  }
})
