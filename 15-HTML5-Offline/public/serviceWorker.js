document.getElementById('myButton').addEventListener('click', function() {
    fetch('naoeustaeho').then(function(res) {
        console.log(res);
    });
});


if (navigator.serviceWorker) {
    navigator.serviceWorker.addEventListener('message', function(e) {
        console.log(e.data);
    });

    navigator.serviceWorker.register('my-service-worker.js', { scope: './' })
        .then(function(reg) {
            console.log(reg);
        })
        .catch(function(err) {
            console.log(err);
        })
    ;
} else {
    console.log('please upgrade');
}
