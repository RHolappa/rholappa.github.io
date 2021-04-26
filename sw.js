importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0cc2afc.js",
    "revision": "428b0348556da4e1c1ad0f0f1d5064b2"
  },
  {
    "url": "/_nuxt/0f0c22a.js",
    "revision": "66bd5d40786d60f648fd3ddd93a4e8be"
  },
  {
    "url": "/_nuxt/7ab7801.js",
    "revision": "a6b5af8ba8905b80a700f940e9eaeba6"
  },
  {
    "url": "/_nuxt/b9b3f2e.js",
    "revision": "dcc4c3ccfc67a2db439b90a55e8d8628"
  },
  {
    "url": "/_nuxt/c496221.js",
    "revision": "f22c33758b65be19a4fe8e4c0ef6c932"
  },
  {
    "url": "/_nuxt/d03bcb7.js",
    "revision": "d968a7f55ac944773c4decbeacd6e3ff"
  },
  {
    "url": "/_nuxt/eeee9e7.js",
    "revision": "7a44c14893f5736059bf358cf86e14cf"
  }
], {
  "cacheId": "testing-nuxt",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('https://fonts.googleapis.com/.*'), workbox.strategies.cacheFirst({"cacheableResponse":{"statuses":[0,200]}}), 'GET')

workbox.routing.registerRoute(new RegExp('https://fonts.gstatic.com/.*'), workbox.strategies.cacheFirst({"cacheableResponse":{"statuses":[0,200]}}), 'GET')

workbox.routing.registerRoute(new RegExp('https://cdn.snipcart.com/.*'), workbox.strategies.networkFirst({"cacheableResponse":{"statuses":[0,200]}}), 'GET')

workbox.routing.registerRoute(new RegExp('https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js'), workbox.strategies.cacheFirst({"cacheableResponse":{"statuses":[0,200]}}), 'GET')
