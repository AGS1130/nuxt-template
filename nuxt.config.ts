// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-10-30",

  // https://devtools.nuxt.com/guide/features
  devtools: { enabled: true },

  // https://eslint.nuxt.com/packages/module
  eslint: {},

  // https://fonts.nuxt.com/get-started/configuration
  fonts: {},

  // https://image.nuxt.com/get-started/configuration
  image: {},

  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/test-utils/module",
    "@nuxt/ui"
  ]
});
