
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

