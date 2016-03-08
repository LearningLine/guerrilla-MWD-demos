// first-class values
var num = 123;
var str = 'abc';
var arr = [];
var obj = {};
var regexp = /foo|bar/g;
var fn = function() {};

// higher-order functions
// otherFunction(123, 'abc', function() {});
// function getFun() { return function() {}; }

var people = [
    'Jason',
    'Brock',
    'alice',
    'Bob'
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







//
