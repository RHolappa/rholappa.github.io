const path = require('path')
import guides from "./contents/guides/guides.js"

export default {
  target: 'static',
  mode: 'universal',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:400,700&amp;display=swap' },
      { rel: 'stylesheet', href: 'https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css' } // Snipcart styling
    ]
  },

  loading: { color: '#fff' },

  css: [
    '@/assets/scss/index.scss'
  ],

  plugins: [
  ],

  buildModules: [
  ],

  modules: [
    '@nuxtjs/pwa',
  ],

  build: {

    extend(config, ctx) {
      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        include: path.resolve(__dirname, 'contents'),
      })
    }
  },

  manifest: {
    name: 'Portfolio',
    short_name: 'Portfolio',
    lang: 'en',
    display: 'standalone',
  },

  generate: {
    fallback: true,
    routes: [].concat(guides.map(guide => `guides/${guide}`))
  },

  workbox: {
    runtimeCaching: [
      {
        urlPattern: 'https://fonts.googleapis.com/.*',
        handler: 'cacheFirst',
        method: 'GET',
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
      },
      {
        urlPattern: 'https://fonts.gstatic.com/.*',
        handler: 'cacheFirst',
        method: 'GET',
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
      },
      {
        urlPattern: 'https://cdn.snipcart.com/.*',
        method: 'GET',
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
      },
      {
        urlPattern: 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js',
        handler: 'cacheFirst',
        method: 'GET',
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
      }
    ]
  },

  vue: {
    config: {
      productionTip: false,
      devtools: true
    }
  }
}
