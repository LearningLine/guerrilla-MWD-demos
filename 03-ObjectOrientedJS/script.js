(function() {
    'use strict';

    // var jason = {
    //     name: 'Jason Diamond',
    //     age: 41,
    //     speak: function() {
    //         console.log('Hi, my name is %s!', this.name);
    //     }
    // };
    //
    // var brock = {
    //     name: 'Brock Allen',
    //     age: 21,
    //     speak: function() {
    //         console.log('Hi, my name is %s!', this.name);
    //     }
    // };

    // JavaScript and Self are prototypal languages
    // Java, C#, C++, Python, Ruby are classical languages

    // function makePerson(name, age) {
    //     return {
    //         name: name,
    //         age: age,
    //         speak: function() {
    //             console.log('Hi, my name is %s!', this.name);
    //         }
    //     };
    // }

    // var jason = makePerson('Jason', 41);
    // var brock = makePerson('Brock', 21);

    function Person(name, age) {
        this.name = name;
        this.age = age;
        // this.speak = function() {
        //     console.log('Hi, my name is %s!', this.name);
        // };
    }

    Person.prototype.speak = function() {
        console.log('Hi, my name is %s!', this.name);
    };

    Person.prototype.sleep = function() {
        console.log('Zzz...');
    };

    Person.prototype.eat = function() {
        console.log('Yum!');
    };

    Person.prototype.name = 'Anonymous';
    Person.prototype.age = 0;
    Person.prototype.height = 72;

    var jason = new Person('Jason', 41);
    var brock = new Person('Brock', 21);

    jason.speak();
    brock.speak();

    brock.height = 70;

    console.log(jason.height);
    console.log(brock.height);

    console.log(jason.dance);

    // jason.dance = function() {
    //     console.log('getting jiggy');
    // }

    Person.prototype.dance = function() {
        console.log('getting jiggy');
    }

    jason.dance();


    var satya = new Person('Satya', 18);

    satya.dance();

    console.log(Person.prototype);
    console.log(Object.getPrototypeOf(jason));
    console.log(jason.__proto__);
    console.log(jason.constructor.prototype);

    console.log(Object.getPrototypeOf(Person));

    function Car() {
    }

    Car.prototype = {
        constructor: Car,
        drive: function() {
            console.log("vroom!");
        }
    };

    var car = new Car();
    car.drive();

    console.log(car.constructor);

    // class Employee : Person {
    //      public Employee(name, age, dept) : base(name, age) {
    //           this.dept = dept;
    //      }
    // }

    // class Employee extends Person {
    //      public Employee(name, age, dept) {
    //           super(name, age);
    //           this.dept = dept;
    //      }
    // }

    function Employee(name, age, dept) {
        // super(name, age);
        Person.call(this, name, age);
        this.dept = dept;
    }

    // Employee.prototype = Person.prototype;

    Employee.prototype = new Person();

    Employee.prototype.work = function() {
        console.log('working');
    };

    Person.prototype.newThing = 'yes';

    var worker = new Employee('Robot', 1000, 'Mfg');

    console.log(worker);

    worker.work();
    worker.sleep();

    var name = 'jason';

    console.log(name.capitalize);

    // DON'T DO THIS!!!
    String.prototype.capitalize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    };

    console.log(name.capitalize());

    var MyUtils = {
        capitalize: function(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        },
        capitalize2: function(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        },
        capitalize3: function(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        },
        capitalize4: function(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        }
    };

    console.log(MyUtils.capitalize(name));

    var myButton = document.getElementById('myButton');

    // myButton.Click += jason.Speak;

    // myButton.addEventListener('click', jason.speak.bind(jason));
    myButton.addEventListener('click', function() {
        jason.speak();
        // jason.speak.call(jason);
    });

    // this.onclick = listener;
    // // later...
    // this.onclick(e);

    var fakeButton = {
        name: 'fake'
    };

    fakeButton.saySomething = jason.speak;

    fakeButton.saySomething();
})();
