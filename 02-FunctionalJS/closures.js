(function() {

// document.getElementsByTagName('button')

var buttons = document.querySelectorAll('button');

// buttons.forEach(function(button) {
//     console.log(button);
// });

// console.log(typeof buttons, Array.isArray(buttons));

// for (var i = 0; i < buttons.length; i++) {
//     var button = buttons[i];
//
//     button.addEventListener('click', function() {
//         console.log('you clicked button # %d', (i + 1));
//     });
// }
//

// var forEach = [].forEach;
var forEach = Array.prototype.forEach;

// var obj = {
//     length: 3,
//     0: 'aaa',
//     1: 'bbb',
//     2: 'ccc'
// };

// console.log(obj.length);
// console.log(obj[0]);
// console.log(obj[1]);
// console.log(obj[2]);

// obj.forEach = forEach;
//
// obj.forEach(function(value, index, array) {
//     console.log(value);
// });

// forEach.call(buttons, function(button, i) {
//     button.addEventListener('click', function() {
//         console.log('you clicked button # %d', (i + 1));
//     });
// })


_.forEach(buttons, function(button, i) {
    button.addEventListener('click', function() {
        console.log('you clicked button # %d', (i + 1));
    });
})


// _(buttons).map().filter().take(5);

// function add(a, b) {
//     return a + b;
// }

var add = _.curry(function(a, b) {
    return a + b;
});

var increment = add(1);

console.log(increment);

console.log(increment(5));






})();
