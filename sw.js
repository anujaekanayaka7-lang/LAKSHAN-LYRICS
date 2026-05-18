const CACHE_NAME = 'lyrics-pro-v1';
const ASSETS = [
  '/LAKSHAN-LYRICS/',
  '/LAKSHAN-LYRICS/index.html',
  '/LAKSHAN-LYRICS/manifest.json',
  '/LAKSHAN-LYRICS/icon-192.png',
  '/LAKSHAN-LYRICS/icon-512.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('activate', (e) => {
  console.log('Service Worker Activated');
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      return res || fetch(e.request);
    })
  );
});
