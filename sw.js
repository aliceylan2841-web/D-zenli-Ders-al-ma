const cacheName = 'acamay-v10-cache';
const assets = [
  '/',
  '/index.html',
  'https://i.ibb.co/84mb5gYg/file-00000000ce8c72439cfbe8e2985449ed.png'
];

// Dosyaları önbelleğe al
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(assets);
    })
  );
});

// İnternet yoksa önbellekten getir
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
