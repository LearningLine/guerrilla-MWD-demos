// main file

var worker = new Worker('my-worker.js');

worker.postMessage('some state');

worker.addEventListener('message', function(e) {
    var data = e.data;

    console.log('worker sent back: %s', data);
});
