importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/32c6c80.js",
    "revision": "e4cade104af82cf46d503a326c31e359"
  },
  {
    "url": "/_nuxt/457d52e.js",
    "revision": "2d6ceb0c85313450b98612b9701bb2ff"
  },
  {
    "url": "/_nuxt/72017d1.js",
    "revision": "7e1c1c9f3b3d0a6c9fa1e85c55351671"
  },
  {
    "url": "/_nuxt/82da693.js",
    "revision": "fe53d36e90b4fa3e3e99b4c166f61473"
  },
  {
    "url": "/_nuxt/84601ed.js",
    "revision": "23e677c1688d4452bd21e944072f0dbb"
  },
  {
    "url": "/_nuxt/ac63fa5.js",
    "revision": "c5af455523fa50ee630393163651236d"
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
