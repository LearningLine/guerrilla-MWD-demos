// worker file

console.log('worker is working');

self.addEventListener('message', function(e) {
    var data = e.data;

    console.log('worker got: %s', data);

    self.postMessage(data.toUpperCase());
});
