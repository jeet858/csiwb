if(!self.define){let e,a={};const s=(s,n)=>(s=new URL(s+".js",n).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(a[c])return;let t={};const r=e=>s(e,c),d={module:{uri:c},exports:t,require:r};a[c]=Promise.all(n.map((e=>d[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-f1770938"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/QXjsu7EzZe3uiMEYN8dYs/_buildManifest.js",revision:"0d67041900b9b0adf2e0250c3d1be09b"},{url:"/_next/static/QXjsu7EzZe3uiMEYN8dYs/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/26.fad1eec05192e579.js",revision:"fad1eec05192e579"},{url:"/_next/static/chunks/36d2f571-5e63dc2de834a42f.js",revision:"5e63dc2de834a42f"},{url:"/_next/static/chunks/41155975-0ff5c5fb00c3bddd.js",revision:"0ff5c5fb00c3bddd"},{url:"/_next/static/chunks/675-45f9f7ae57ff0f95.js",revision:"45f9f7ae57ff0f95"},{url:"/_next/static/chunks/68c0a17d-f2df4cadf7b8e87d.js",revision:"f2df4cadf7b8e87d"},{url:"/_next/static/chunks/762-755ed4e777b12058.js",revision:"755ed4e777b12058"},{url:"/_next/static/chunks/92977076-61400686c9586870.js",revision:"61400686c9586870"},{url:"/_next/static/chunks/cb355538-d051fa04070a41be.js",revision:"d051fa04070a41be"},{url:"/_next/static/chunks/fea29d9f-be33f67e15fe72d6.js",revision:"be33f67e15fe72d6"},{url:"/_next/static/chunks/framework-ecc4130bc7a58a64.js",revision:"ecc4130bc7a58a64"},{url:"/_next/static/chunks/main-d4f38cfb021a0cee.js",revision:"d4f38cfb021a0cee"},{url:"/_next/static/chunks/pages/_app-637eac0e0eae4b1c.js",revision:"637eac0e0eae4b1c"},{url:"/_next/static/chunks/pages/_error-77823ddac6993d35.js",revision:"77823ddac6993d35"},{url:"/_next/static/chunks/pages/admin-panel-8aa3abb853bd9d18.js",revision:"8aa3abb853bd9d18"},{url:"/_next/static/chunks/pages/index-01685531a4a2f56f.js",revision:"01685531a4a2f56f"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-a6e9c719929bdd5d.js",revision:"a6e9c719929bdd5d"},{url:"/_next/static/css/47124840f12484b8.css",revision:"47124840f12484b8"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/Soumitra_kr.89841c1e.png",revision:"c0bb1853b4dbacb522608dd01883f094"},{url:"/_next/static/media/abount-heading.6e1bfe80.png",revision:"2c903bf5845c547ccd2e78190a9c48d6"},{url:"/_next/static/media/bg.ed22b482.png",revision:"ed22b482"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/eposter-bg.143a9036.png",revision:"143a9036"},{url:"/_next/static/media/eposter-heading.4582b297.png",revision:"07b2fe0fc0884eb886ce123a28175840"},{url:"/_next/static/media/eposter.ff1be360.png",revision:"18afca468e89ff60ae55ba1372612ac2"},{url:"/_next/static/media/error-icon.b4a9fc0a.png",revision:"d215583a6320c995847766c4e17a2161"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/_next/static/media/heart-icon.52600798.png",revision:"ae60183e51fc8ec0a9bab53d9d4e3d81"},{url:"/_next/static/media/logo.c5948dfe.png",revision:"7966b21a82f428d35cb65288f81c4821"},{url:"/_next/static/media/pk_hazra.94535121.png",revision:"972c0faa183ad9664593688cfe007b47"},{url:"/_next/static/media/popup-bg.da2f0357.png",revision:"da2f0357"},{url:"/_next/static/media/ranjan_sharma.8227dbcb.png",revision:"b754b91701a939efa5c265e3421fd770"},{url:"/_next/static/media/success_icon.c673d2c6.png",revision:"8a4f45a5eb50cc158ababc660625910b"},{url:"/_next/static/media/sunip_banerjee.f2e5508f.png",revision:"86a4e72f9fcd325563c7e175ce1d1ec9"},{url:"/_next/static/media/suvro_banerjee.a8204fa0.png",revision:"bc68181ac4de7e0fed673c694793d741"},{url:"/_next/static/media/top-banner-new.c5e08e3b.png",revision:"147eb17116fe23ad79cccb9aa7be9f38"},{url:"/_next/static/media/updates-heading.171ab889.png",revision:"daa7aa1b590a2382ee7bc178717c82e5"},{url:"/favicon.ico",revision:"f3c25005ddbc164f60f31b5aeb413ce5"},{url:"/icons/ic_launcher.png",revision:"4915df4e2aa139d301d7ce1b5562d991"},{url:"/manifest.json",revision:"5f29318932d60c604a51953f31080580"},{url:"/swe-worker-5c72df51bb1f6ee0.js",revision:"5a47d90db13bb1309b25bdf7b363570e"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:a}})=>!(!e||a.startsWith("/api/auth/callback")||!a.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:a},sameOrigin:s})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&s&&!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:a},sameOrigin:s})=>"1"===e.headers.get("RSC")&&s&&!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:a})=>a&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));
