const CACHE_NAME = 'wrestling-waiter-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/styles.css',
  '/script.js',
  'https://i.postimg.cc/50PGHsRw/sfondo.png',
  'https://i.postimg.cc/G23VhWqL/sanjana.png',
  'https://i.postimg.cc/6QfFKWVb/nemico.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});