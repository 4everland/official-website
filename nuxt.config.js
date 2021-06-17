export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "4EVERLAND - The PaaS of Web3.0",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      {
        src: "/js/flexible.js",
        type: "text/javascript",
        charset: "utf-8",
      },
      {
        src: "/js/third-party/globe.gl.js",
        type: "text/javascript",
        charset: "utf-8",
      },
      // {
      //   src: '/js/third-party/Detector.js',
      //   type: 'text/javascript',
      //   charset: 'utf-8',
      // },
      // {
      //   src: '/js/third-party/three.min.js',
      //   type: 'text/javascript',
      //   charset: 'utf-8',
      // },
      // {
      //   src: '/js/third-party/globe.js',
      //   type: 'text/javascript',
      //   charset: 'utf-8',
      // },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["./assets/style/iconfont.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "@/plugins/element-ui",
    "~/plugins/font-awesome",
    "~/plugins/route",
    {
      src: "@/plugins/vue-lazyload",
      ssr: false,
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    // '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["nuxt-fontawesome"],

  fontawesome: {
    component: "fa",
    imports: [
      {
        set: "@fortawesome/free-solid-svg-icons",
        icons: ["fas"],
      },
      {
        set: "@fortawesome/free-regular-svg-icons",
        icons: ["far"],
      },
      {
        set: "@fortawesome/free-brands-svg-icons",
        icons: ["fab"],
      },
    ],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [
        [
          "component",
          {
            libraryName: "element-ui",
            styleLibraryName: "theme-chalk",
          },
        ],
      ],
    },
  },
  postcss: [
    require("postcss-px2rem")({
      remUnit: 75,
    }),
  ],
};
