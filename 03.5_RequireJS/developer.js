// define([], function() {
//     var Person = require('person');
//
//     function Developer(name, lang) {
//         Person.call(this, name);
//         this.lang = lang;
//     }
//
//     Developer.prototype = Object.create(Person.prototype);
//
//     Developer.prototype.code = function() {
//         console.log('hack');
//     };
//
//     return Developer;
// });


define([
    'person'//,
    // 'foo',
    // 'bar',
    // 'baz',
    // 'quux'
], function(
    Person//,
    // foo,
    // bar,
    // baz,
    // quux
) {
    function Developer(name, lang) {
        Person.call(this, name);
        this.lang = lang;
    }

    Developer.prototype = Object.create(Person.prototype);

    Developer.prototype.code = function() {
        console.log('hack');
    };

    return Developer;
});
