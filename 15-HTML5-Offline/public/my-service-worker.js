console.log('service worker says hi');

var offlineFiles = [
    'serviceWorker.html',
    'serviceWorker.js',
    'app.js'
];

self.addEventListener('install', function(e) {
    e.waitUntil(
        self.caches.open('my-cache-v2').then(function(cache) {
            return cache.addAll(offlineFiles);
        })
    );
});

self.addEventListener('fetch', function(e) {
    console.log('fetching %s at %s', e.request.url, new Date());

    e.respondWith(
        self.caches.match(e.request)
            .then(function(res) {
                if (res) {
                    return res;
                }

                return new Response('here is my fake content');
            })
    );
});












//
