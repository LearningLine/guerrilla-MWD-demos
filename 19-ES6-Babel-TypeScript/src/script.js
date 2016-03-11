'use strict';

import {myModule} from './myModule';

const a = 1;
// a = 2;

let fn1 = function(a, b) {
    if (false) {
        let x;
    }

    console.log(x);

    return a + b;
};

var fn2 = (a, b) => a + b;

var obj = {
    method1: function() {
        console.log(this);
    },

    method2: () => console.log(this)
};

obj.method1();
var method1 = obj.method1;
method1();

obj.method2();
var method2 = obj.method2;
method2();

var fn3 = () => true;

var fn4 = a => a + 1;

var fn5 = () => {
    console.log('hi');
    console.log('bye');

    return true;
};

class Person {
    constructor(first, last, age) {
        this.first = first;
        this.last = last;
        this.age = age;
    }

    speak() {
        console.log(this.first);
    }

    eat() {
        console.log('yum!!!');
    }
}

var jason = new Person('Jason', 'Diamond',  41);
jason.speak();
jason.eat();

function formatName1(first, last) {
    return `hello ${first} ${last}`;
}

console.log(formatName1(jason.first, jason.last));

function formatName2(person) {
    var first = person.first;
    var last = person.last;
    return `hello ${first} ${last}`;
}

console.log(formatName2(jason));

function formatName3(person) {
    var {first, last} = person;
    return `hello ${first} ${last}`;
}

console.log(formatName3(jason));

function formatName4({first, last}) {
    return `hello ${first} ${last}`;
}

console.log(formatName4(jason));

let x = 1;
let y = 2;

console.log(x, y);
[y, x] = [x, y];
console.log(x, y);

function sum(message, ...args) {
    return args.reduce((p, c) => p + c, 0);
}

console.log(sum('hi', 1, 2, 3))

// console.log(myModule.myFunction());

// 


//
