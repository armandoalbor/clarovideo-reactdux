"use strict";var precacheConfig=[["/armandoalbor/clarovideo-react-redux/index.html","bd97964d87331cac6ef9c32dbf347612"],["/armandoalbor/clarovideo-react-redux/static/css/main.cff85a37.css","6f06b6220c28348f33cb232828acdf77"],["/armandoalbor/clarovideo-react-redux/static/js/main.6ed4fd6d.js","8fc363e3ca5ecbbf44d2cc653931a5b1"],["/armandoalbor/clarovideo-react-redux/static/media/weathericons-regular-webfont.2ca3df09.ttf","2ca3df0981116e195ebc62dd1dcc8b9b"],["/armandoalbor/clarovideo-react-redux/static/media/weathericons-regular-webfont.b2233bc1.svg","b2233bc1525939550405c87cffede242"],["/armandoalbor/clarovideo-react-redux/static/media/weathericons-regular-webfont.e7ef2b44.eot","e7ef2b448d27cf5312a73ceb3e7841c4"],["/armandoalbor/clarovideo-react-redux/static/media/weathericons-regular-webfont.f5b0d0d9.woff","f5b0d0d9cb02e551003132e079435312"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,r){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=r),t.toString()},cleanResponse=function(r){return r.redirected?("body"in r?Promise.resolve(r.body):r.blob()).then(function(e){return new Response(e,{headers:r.headers,status:r.status,statusText:r.statusText})}):Promise.resolve(r)},createCacheKey=function(e,r,t,n){var a=new URL(e);return n&&a.pathname.match(n)||(a.search+=(a.search?"&":"")+encodeURIComponent(r)+"="+encodeURIComponent(t)),a.toString()},isPathWhitelisted=function(e,r){if(0===e.length)return!0;var t=new URL(r).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var r=new URL(e);return r.hash="",r.search=r.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(r){return t.every(function(e){return!e.test(r[0])})}).map(function(e){return e.join("=")}).join("&"),r.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var r=e[0],t=e[1],n=new URL(r,self.location),a=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),a]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(r){if(!t.has(r)){var e=new Request(r,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+r+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(r,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(r){return r.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return r.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(r){if("GET"===r.request.method){var e,t=stripIgnoredUrlParameters(r.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var a="/armandoalbor/clarovideo-react-redux/index.html";!e&&"navigate"===r.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],r.request.url)&&(t=new URL(a,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&r.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',r.request.url,e),fetch(r.request)}))}});