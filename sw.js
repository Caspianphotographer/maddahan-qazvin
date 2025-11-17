self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('maddahan-cache').then(cache => {
            return cache.addAll([
                '/',
                '/index.html',
                '/css/style.css'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then(res => {
            return res || fetch(event.request);
        })
    );
});
