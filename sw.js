// Cosmic Scribe: network-first for the app page (always gets the latest when online), cache fallback for offline.
const V='scribe-v10', FILES=['./','index.html','help.html','manifest.webmanifest','icon-192.png','icon-512.png','apple-touch-icon.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(n=>n!==V).map(n=>caches.delete(n)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET') return;
  e.respondWith(fetch(e.request,{cache:'no-cache'}).then(res=>{
    if(res&&(res.ok||res.type==='opaque')){const copy=res.clone();caches.open(V).then(c=>c.put(e.request,copy));}
    return res;}).catch(()=>caches.match(e.request).then(h=>h||caches.match('index.html'))));
});
