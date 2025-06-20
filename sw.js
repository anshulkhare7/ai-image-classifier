const CACHE_NAME = 'smart-ai-vision-cache-betwa';
const ASSETS_TO_CACHE = [
  './', // Alias for index.html
  './index.html'
  // We are intentionally not caching the large, externally hosted AI model JS files
  // or other external resources like TensorFlow.js in this basic setup.
  // This keeps the service worker simple and avoids potential issues with
  // opaque responses or versioning of these large third-party scripts.
  // The browser's standard HTTP cache will still play a role for these.
];

// Install event: open cache and add core assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Caching core assets');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .then(() => self.skipWaiting()) // Activate the new service worker immediately
      .catch(error => {
        console.error('Service Worker: Caching failed', error);
      })
  );
});

// Activate event: clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Service Worker: Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim()) // Take control of all open clients
  );
});

// Fetch event: serve assets from cache or network
self.addEventListener('fetch', (event) => {
  const { request } = event;

  // For navigation requests (HTML pages), use a Cache First strategy.
  if (request.mode === 'navigate' || (request.destination === 'document')) {
    event.respondWith(
      caches.match(request)
        .then((cachedResponse) => {
          if (cachedResponse) {
            console.log('Service Worker: Serving from cache:', request.url);
            return cachedResponse;
          }
          console.log('Service Worker: Fetching from network:', request.url);
          return fetch(request)
            .then((networkResponse) => {
              // Optionally, cache the newly fetched page if it's a GET request
              if (networkResponse && networkResponse.status === 200 && request.method === 'GET') {
                const responseToCache = networkResponse.clone();
                caches.open(CACHE_NAME)
                  .then((cache) => {
                    cache.put(request, responseToCache);
                  });
              }
              return networkResponse;
            });
        })
        .catch(error => {
          console.error('Service Worker: Fetch error:', error);
          // Fallback to a generic offline page if you have one
          // return caches.match('./offline.html');
        })
    );
  } else if (ASSETS_TO_CACHE.includes(request.url.endsWith('/') ? './' : new URL(request.url).pathname.substring(1))) {
    // For core assets explicitly listed, use Cache First.
     event.respondWith(
        caches.match(request)
            .then(response => {
                if (response) {
                    console.log('Service Worker: Serving core asset from cache:', request.url);
                    return response;
                }
                console.log('Service Worker: Fetching core asset from network:', request.url);
                return fetch(request).then(networkResponse => {
                    if (networkResponse && networkResponse.status === 200) {
                        const responseToCache = networkResponse.clone();
                        caches.open(CACHE_NAME).then(cache => {
                            cache.put(request, responseToCache);
                        });
                    }
                    return networkResponse;
                });
            })
    );
  } else {
    // For other requests (e.g., external scripts, images not in cache list),
    // use a Network First strategy to ensure freshness.
    // This is important for the dynamically loaded AI models.
    event.respondWith(
      fetch(request)
        .then((networkResponse) => {
          // Check if we received a valid response
          if (networkResponse && networkResponse.status === 200 && request.method === 'GET') {
            // Clone the response to put it in the cache and to return it to the browser
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME)
              .then((cache) => {
                // Cache non-core assets if fetched successfully
                // console.log('Service Worker: Caching non-core asset:', request.url);
                // Be cautious about caching everything, especially large or opaque responses.
                // For this app, we'll let the browser handle caching for TensorFlow models.
              });
          }
          return networkResponse;
        })
        .catch(() => {
          // If network fails, try to serve from cache if it exists
          // This is useful for assets that might have been cached on a previous visit
          // but are not part of the core ASSETS_TO_CACHE.
          return caches.match(request).then(cachedResponse => {
            if (cachedResponse) {
              console.log('Service Worker: Serving non-core asset from cache (network failed):', request.url);
              return cachedResponse;
            }
            // If not in cache and network fails, it's a genuine offline situation for this resource.
            // console.log('Service Worker: Asset not in cache and network failed:', request.url);
            // Return undefined, browser will handle the error (e.g. for an image, it shows broken image icon)
            return undefined;
          });
        })
    );
  }
});
