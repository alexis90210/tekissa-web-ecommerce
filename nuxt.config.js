export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Tekissa | E-commerce | Acceuil",
    htmlAttrs: {
      lang: "fr",
    },
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "maximum-scale=5,minimum-scale=0.35,shrink-to-fit=no",
      },
      {
        hid: "description",
        name: "description",
        content: "E-commerce au congo, brazzaville",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", type: "text/css", href: "/css/main.css" },
    ],

    script: [
      {
        type: "text/javascript",
        src: "/js/main.js",
        body: true,
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    "nuxt-buefy",
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    'cookie-universal-nuxt',
  ],

  loading: {
    color: "#01B3FF",
    height: "7px",
  },

  router: {
    middleware: 'client'
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    browserBaseURL: process.env.API,
    baseURL: process.env.API,
    proxy: true,
    proxyHeaders: true,
    retry: { retries: 3 },

    progress: true,
    header: {
      common: {
        Accept: "application/json, text/plain, */*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
      },
      delete: {},
      get: {},
      head: {},
      post: {
        Accept: "application/json, text/plain, */*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
      },
      put: {},
      patch: {},
    },
  },

  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.API,
      baseURL: process.env.API,
      proxy: true,
      proxyHeaders: true,
      retry: { retries: 3 },

      progress: true,
      header: {
        common: {
          Accept: "application/json, text/plain, */*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
        },
        delete: {},
        get: {},
        head: {},
        post: {
          Accept: "application/json, text/plain, */*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
        },
        put: {},
        patch: {},
      },
    },
  },

  privateRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.API,
      baseURL: process.env.API,
      proxy: true,
      proxyHeaders: true,
      retry: { retries: 3 },

      progress: true,
      header: {
        common: {
          Accept: "application/json, text/plain, */*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
        },
        delete: {},
        get: {},
        head: {},
        post: {
          Accept: "application/json, text/plain, */*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
        },
        put: {},
        patch: {},
      },
    },
  },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
