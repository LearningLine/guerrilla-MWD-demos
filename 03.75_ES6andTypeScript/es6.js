console.log('Hello, ES6!');

// Arrow functions
var fn = (a, b) => a + b;

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    speak() {
        console.log('Hi, my name is %s', formatName(this));
    }
}

class Developer extends Person {
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


function formatName1(person) {
    var first = person.firstName;
    var last = person.lastName;

    return first + ' ' + last;
}

function formatName2(person) {
    var { firstName, lastName } = person;

    return firstName + ' ' + lastName;
}

function formatName3(person) {
    var { firstName: first, lastName: last } = person;

    return first + ' ' + last;
}

function formatName({ firstName: first, lastName: last }) {
    return first + ' ' + last;
}




var p = new Developer('Jason', 'Diamond', [ 'JavaScript', 'C#', 'C++' ]);
p.speak();
