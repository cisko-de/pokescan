/* App shell and viewed reference images only; collection and photos live separately. */
const SHELL='pokescan-shell-v20',IMAGES='pokescan-images-v2';
const ASSETS=['./','./index.html','./style.css','./core.js','./app.js','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install',event=>event.waitUntil(caches.open(SHELL).then(cache=>cache.addAll(ASSETS))));
self.addEventListener('message',event=>{if(event.data?.type==='ACTIVATE_UPDATE')self.skipWaiting();});
self.addEventListener('activate',event=>event.waitUntil((async()=>{const keys=await caches.keys();await Promise.all(keys.filter(k=>(/^pokescan-v\d+$/.test(k)||k.startsWith('pokescan-shell-'))&&k!==SHELL).map(k=>caches.delete(k)));await self.clients.claim();})()));
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;
  const url=new URL(event.request.url);
  if(url.origin===self.location.origin){
    event.respondWith((async()=>{const cache=await caches.open(SHELL);try{const response=await fetch(event.request);if(response.ok){await cache.put(event.request,response.clone()).catch(()=>{});return response;}throw Error('Request failed');}catch(err){const cached=await cache.match(event.request);if(cached)return cached;if(event.request.mode==='navigate')return cache.match('./index.html');throw err;}})());return;
  }
  if(url.hostname==='assets.tcgdex.net')event.respondWith((async()=>{const cache=await caches.open(IMAGES),cached=await cache.match(event.request);if(cached&&!(event.request.mode==='cors'&&cached.type==='opaque'))return cached;const r=await fetch(event.request);if(r.ok||r.type==='opaque'){await cache.put(event.request,r.clone()).catch(()=>{});const keys=await cache.keys();if(keys.length>300)await cache.delete(keys[0]);}return r;})());
});
