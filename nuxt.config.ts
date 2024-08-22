// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",

  // https://devtools.nuxt.com/guide/features
  devtools: { enabled: true },

  // https://eslint.nuxt.com/packages/module
  eslint: {},

  // https://fonts.nuxt.com/get-started/configuration
  fonts: {},

  // https://html-validator.nuxtjs.org/#configuration-optional
  htmlValidator: {},

  // https://i18n.nuxtjs.org/docs/options
  i18n: {},

  // https://image.nuxt.com/get-started/configuration
  image: {},

  // https://nuxtseo.com/link-checker/api/config
  linkChecker: {
    enabled: false
  },

  // https://nuxtseo.com/og-image/api/config
  ogImage: {
    enabled: false
  },

  // https://nuxtseo.com/robots/api/config
  robots: {
    enabled: false
  },

  // https://nuxtseo.com/schema-org/api/config
  schemaOrg: {
    enabled: false
  },

  // https://nuxtseo.com/experiments/api/config
  seoExperiments: {
    enabled: false
  },

  // https://nuxtseo.com/site-config/api/config
  site: {
    url: "https://example.com",
    name: "Awesome Site",
    description: "Welcome to my awesome site!"
  },

  // https://nuxtseo.com/sitemap/api/config
  sitemap: {
    enabled: false
  },

  // https://storybook.nuxtjs.org/getting-started/options
  storybook: {},

  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/test-utils/module",
    "@nuxt/ui",
    "@nuxtjs/harlem",
    "@nuxtjs/html-validator",
    "@nuxtjs/i18n",
    "@nuxtjs/seo",
    "@nuxtjs/storybook",
    "@nuxtjs/supabase"
  ]
});
