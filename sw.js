const CACHE_NAME = 'ssi-standards-trainer-v1.1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './index.css',
  './app.js',
  './questions.js',
  './logo.png',
  './manifest.json',
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700;800&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
];

// Install Service Worker and cache all critical assets
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Caching offline assets...');
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

// Activate Service Worker and clean up old caches
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('Clearing old cache:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Cache-First with Network-Fallback strategy
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      if (cachedResponse) {
        // Fetch in background to update cache (Stale-While-Revalidate)
        fetch(e.request).then((networkResponse) => {
          if (networkResponse.status === 200) {
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(e.request, networkResponse);
            });
          }
        }).catch(err => console.log('SWR fetch failed (offline)'));
        
        return cachedResponse;
      }
      
      return fetch(e.request);
    })
  );
});
