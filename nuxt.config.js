export default {
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    title: "Chiamaka Iwuanyanwu",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      {
        rel: "stylesheet",
        href: "https://getbootstrap.com/docs/4.2/dist/css/bootstrap.min.css"
      },
      { rel: "icon", type: "image/x-icon", href: "/logo.png" }
    ],
    script: [
      {
        src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
        type: "text/javascript"
      },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
        type: "text/javascript"
      },
      {
        src:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js",
        type: "text/javascript"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [
    "~/assets/css/main.css",
    "~/assets/css/icons.css",
    "~/assets/css/fonts.css"
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: "~/plugins/", mode: "client" }],
  /*
   ** Nuxt.js modules
   */
  modules: ["vue-scrollto/nuxt", "@nuxtjs/google-analytics"],
  generate: {
    fallback: true
  },
  googleAnalytics: {
    id: "UA-160622134-1"
  },
  /*
   ** Build configuration
   */
  build: {}
};
