console.log('Hello, ES6!');

// Arrow functions
var fn = (a, b) => a + b;

class Person implements ISpeakable {
    firstName: string;
    lastName: string;

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    speak() {
        console.log('Hi, my name is %s %s', this.firstName, this.lastName);
    }
}

class Developer extends Person {
    langs: string[];

    constructor(firstName, lastName, langs) {
        super(firstName, lastName);
        this.langs = langs;
    }

    speak() {
        this.langs.forEach(lang => {
            super.speak();
            console.log('I can code in %s!', lang);
        });
    }
}

var p = new Developer('Jason', 'Diamond', [ 'JavaScript', 'C#', 'C++' ]);

p.speak();

var num: number = 123;

function add(a: number, b: number): number {
    return a + b;
}

var x = add(1234, 5678);

console.log(x);

var myAdd: {
    (a: number, b: number): number;
    (nums: number[]): number;
};

myAdd = function(a, b?): number {
    if (Array.isArray(a)) {
        return 0; 
    }
    
    return a + b;
};

class Animal {
    constructor(public name: string, private legs: number) {
    }
}

var spot = new Animal('Spot', 4);
var dummy = spot['aoeuaoeuea'];

var animals: Animal[] = [ spot ];

interface ISpeakable {
    speak()
}

var speaker: ISpeakable = p;
p.speak();

/// <reference path="jquery.d.ts" />

var foo = $('#foo');
