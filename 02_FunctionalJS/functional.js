var num = 123;
var str = 'abc';
var bool = true;
var arr = [ num, str, bool ];
var obj = { num: num, str: str, bool: bool };
var dt = new Date(2015, 4, 18);
var re = /foo|bar/i; // new RegExp('foo|bar', 'i');
var fn = function() { };

// first class citizens/values/objects

// higher order functions

var people = [
    'Jason',
    'brock',
    'Alice',
    'Bob',
    'Carol'
];

people.sort(function(a, b) {
    a = a.toLowerCase();
    b = b.toLowerCase();

    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }
});

console.log(people);

// var myButton = document.getElementById('myButton1');
//
// myButton.addEventListener('click', function() {
//     alert('I got clicked!');
// });

function init1() {
    var buttons = document.getElementsByTagName('button');

    for (var i = 0; i < buttons.length; i++) {
        var button = buttons[i];
        addListener(button, i);
    }

    function addListener(button, i) {
        button.addEventListener('click', function() {
            alert('You clicked button # ' + (i + 1) + '!');
        });
    }
}

function init2() {
    var buttons = document.getElementsByTagName('button');

    for (var i = 0; i < buttons.length; i++) {
        var button = buttons[i];

        // IIFE - immediately-invoked function expression
        (function(j) {
            button.addEventListener('click', function() {
                alert('You clicked button # ' + (j + 1) + '!');
            });
        })(i);
    }
}

function init3() {
    var buttons = document.getElementsByTagName('button');

    // buttons = [ buttons[0], buttons[1], buttons[2] ];

    // buttons.doLoop = [].forEach;

    var forEach = Array.prototype.forEach;

    forEach.call(buttons, function(button, i) {
        button.addEventListener('click', function() {
            alert('You clicked button # ' + (i + 1) + '!');
        });
    });
}

init3();

// map     => Select
// filter  => Where
// reduce  => Aggregate
// every   => All
// some    => Any









//
