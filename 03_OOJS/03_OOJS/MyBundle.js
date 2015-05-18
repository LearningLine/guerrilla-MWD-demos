///#source 1 1 /Person.js

//function personFactory(name, age) {
//    var p = {
//        name: name, age: age,
//        speak: function () {
//            console.log('Hi my name is ' + this.name + " and I am " + this.age + " years old");
//        }
//    }
//    return p;
//}

//var x = 20;
//window.x = 20;
//function foo() {
//}

//window.foo = function () {
//}
//foo();
//window.foo();

function Person(name, age) {
    'use strict';
    //if (!(this instanceof Person)) {
    //    throw new Error("you're doing it wrong");
    //    //return new Person(name, age);
    //}

    this._age = age;

    //Object.defineProperty(this, "age", {
    //    get: function () {
    //        return _age;
    //    },
    //    set: function (val) {
    //        if (val >= 0) {
    //            _age = val;
    //        }
    //        else {
    //            throw new Error("can't set age to be less than zero");
    //        }
    //    }
    //})
    //this.name = name;
    this.age = age;
    //this.speak = function () {
    //    console.log('Hi my name is ' + this.name + " and I am " + this.age + " years old");
    //}
}

Person.prototype.speak = function () {
    console.log('Hi my name is ' + this.name + " and I am " + this.age + " years old");
}

Person.prototype.work = function () {
    console.log(this.name + " is working...");
}
// duck punch, monkey patch
Object.defineProperty(Person.prototype, "age", {
    get: function () {
        return this._age;
    },
    set: function (val) {
        if (val >= 0) {
            this._age = val;
        }
        else {
            throw new Error("xoxoxocan't set age to be less than zero");
        }
    }
})


///#source 1 1 /Developer.js

function Developer(name, age, language) {
    Person.call(this, name, age);
    this.language = language;
}

Developer.prototype = Object.create(Person.prototype);
//Developer.prototype = new Person();

Developer.prototype.code = function () {
    console.log(this.name + " is coding with " + this.language);
}
Developer.prototype = Object.freeze(Developer.prototype);
Developer.prototype.code = function () {
    console.log("new code");
}

///#source 1 1 /code.js
/// <reference path="Person.js" />
/// <reference path="Developer.js" />

//Person.prototype.foo = 1;

//var tmp = {};
//Person.call(tmp, "Brock", 21);
//var brock = tmp;

//var brock = new Person("Brock", 21);
////brock.foo = 10;
//brock.speak();

//Person.prototype.speak = function () {
//    console.log('this is not the speak you are looking for')
//}
//brock.speak();

//for (var key in Object.getPrototypeOf(brock)) {
//for (var key in brock) {
//    console.log(key, brock.hasOwnProperty(key));
//}

//brock.speak();

//var j = new Person("Jason", 12);
//j.speak();

//console.log(j.speak === brock.speak);


var brock = new Developer("Brock", 21, "C#");
//brock.age = -10;
brock.speak();
console.log('trying to override code!')
brock.code = function () {
    console.log("new code");
}
brock.code();

console.log(brock instanceof Object);
console.log(brock instanceof Person);
console.log(brock instanceof Developer);
console.log(brock instanceof Date);

