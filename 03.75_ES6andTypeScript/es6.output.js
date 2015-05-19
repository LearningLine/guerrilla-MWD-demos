'use strict';

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

console.log('Hello, ES6!');

// Arrow functions
var fn = function fn(a, b) {
    return a + b;
};

var Person = (function () {
    function Person(firstName, lastName) {
        _classCallCheck(this, Person);

        this.firstName = firstName;
        this.lastName = lastName;
    }

    _createClass(Person, [{
        key: 'speak',
        value: function speak() {
            console.log('Hi, my name is %s', formatName(this));
        }
    }]);

    return Person;
})();

var Developer = (function (_Person) {
    function Developer(firstName, lastName, langs) {
        _classCallCheck(this, Developer);

        _get(Object.getPrototypeOf(Developer.prototype), 'constructor', this).call(this, firstName, lastName);
        this.langs = langs;
    }

    _inherits(Developer, _Person);

    _createClass(Developer, [{
        key: 'speak',
        value: function speak() {
            var _this = this;

            this.langs.forEach(function (lang) {
                _get(Object.getPrototypeOf(Developer.prototype), 'speak', _this).call(_this);
                console.log('I can code in %s!', lang);
            });
        }
    }]);

    return Developer;
})(Person);

function formatName1(person) {
    var first = person.firstName;
    var last = person.lastName;

    return first + ' ' + last;
}

function formatName2(person) {
    var firstName = person.firstName;
    var lastName = person.lastName;

    return firstName + ' ' + lastName;
}

function formatName3(person) {
    var first = person.firstName;
    var last = person.lastName;

    return first + ' ' + last;
}

function formatName(_ref) {
    var first = _ref.firstName;
    var last = _ref.lastName;

    return first + ' ' + last;
}

var p = new Developer('Jason', 'Diamond', ['JavaScript', 'C#', 'C++']);
p.speak();

var foo = 123;
var bar = 456;

var obj = {
    foo,
    bar
}
