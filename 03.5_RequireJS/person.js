define([], function() {
    function Person(name) {
        this.name = name;
    }

    Person.prototype.speak = function() {
        console.log('hi');
    };

    return Person;
});












// Revealing Module Pattern

// var Person = (function() {
//     function Person(name) {
//         this.name = name;
//     }
//
//     Person.prototype.speak = function() {
//         console.log('hi');
//     };
//
//     return Person;
// })();
