var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
console.log('Hello, ES6!');
// Arrow functions
var fn = function (a, b) { return a + b; };
var Person = (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.speak = function () {
        console.log('Hi, my name is %s %s', this.firstName, this.lastName);
    };
    return Person;
})();
var Developer = (function (_super) {
    __extends(Developer, _super);
    function Developer(firstName, lastName, langs) {
        _super.call(this, firstName, lastName);
        this.langs = langs;
    }
    Developer.prototype.speak = function () {
        var _this = this;
        this.langs.forEach(function (lang) {
            _super.prototype.speak.call(_this);
            console.log('I can code in %s!', lang);
        });
    };
    return Developer;
})(Person);
var p = new Developer('Jason', 'Diamond', ['JavaScript', 'C#', 'C++']);
p.speak();
var num = 123;
function add(a, b) {
    return a + b;
}
var x = add(1234, 5678);
console.log(x);
var myAdd;
myAdd = function (a, b) {
    if (Array.isArray(a)) {
        return 0;
    }
    return a + b;
};
var Animal = (function () {
    function Animal(name, legs) {
        this.name = name;
        this.legs = legs;
    }
    return Animal;
})();
var spot = new Animal('Spot', 4);
