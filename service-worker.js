self.addEventListener('fetch', function(event) {
    // This will eventually handle offline requests, but for now does nothing
  });

const CACHE_NAME = "my-pwa-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/styles.css",
  "/script.js",
];
self.addEventListener("")