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
    "url": "/_nuxt/5090d8f.js",
    "revision": "d0890cee86c626cde4ae18d4cdd5966d"
  },
  {
    "url": "/_nuxt/6337598.js",
    "revision": "b26bf3785895829fc08ba86f4edfdfec"
  },
  {
    "url": "/_nuxt/ad93499.js",
    "revision": "c4746748f30fa4565c0dda8aa03edf27"
  },
  {
    "url": "/_nuxt/b9b3f2e.js",
    "revision": "dcc4c3ccfc67a2db439b90a55e8d8628"
  },
  {
    "url": "/_nuxt/d03bcb7.js",
    "revision": "d968a7f55ac944773c4decbeacd6e3ff"
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
