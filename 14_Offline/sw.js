


self.addEventListener('fetch', function(e) {
    console.log(e.request);

    e.respondWith(
        fetch(e.request)
    );
});
