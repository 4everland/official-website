import colors from 'vuetify/es5/util/colors'
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`,
})

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - A Cloud Computing Platform of WEB 3.0',
    title: '4EVERLAND',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: '4EVERLAND - A CLOUD COMPUTING PLATFORM OF WEB3.0',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          '4EVERLAND is a Web 3.0 cloud computing platform that integrates storage, computing, and network core capabilities.',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://www.4everland.org/cover.gif',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://4everland.org/',
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: '4EVERLAND - A CLOUD COMPUTING PLATFORM OF WEB3.0',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          '4EVERLAND is a Web 3.0 cloud computing platform that integrates storage, computing, and network core capabilities.',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://www.4everland.org/cover.gif',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: '/css/materialdesignicons.min.css',
      },
    ],
    script: [
      {
        src: '/js/globe.gl.min.js',
        type: 'text/javascript',
        charset: 'utf-8',
      },
      // Google Analytics Code
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=GG-Z3J8V955T6',
        async: true,
      },
      // Import analitics.js file
      { src: '/js/analytics.js' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['assets/styles/common.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    'plugins/global',
    'plugins/extend',
    // { src: 'plugins/ga.js', ssr: false },
    { src: 'plugins/vue-swiper.js', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    // https://www.npmjs.com/package/@nuxtjs/markdownit
    '@nuxtjs/markdownit',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://www.npmjs.com/package/vuetify-dialog
    'vuetify-dialog/nuxt',
    ['@nuxtjs/dotenv', { filename: '.env.production' }],
  ],
  env: {
    BASE_URL: process.env.BASE_URL,
    NODE_ENV: process.env.NODE_ENV,
    AUTH_URL: process.env.AUTH_URL,
    DASHBOARD_HOST: process.env.DASHBOARD_HOST,
    LOGIN_URL: process.env.LOGIN_URL,
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.BASE_URL, // Used as fallback if no runtime config is provided
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/styles/variables.scss'],
    treeShake: true,
    defaultAssets: {
      font: false,
      icons: false,
    },
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  loading: '~/components/loading.vue',
}
