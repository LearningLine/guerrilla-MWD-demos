


self.addEventListener('message', function(e) {
    var str = e.data.toUpperCase();

    self.postMessage(str);
});
