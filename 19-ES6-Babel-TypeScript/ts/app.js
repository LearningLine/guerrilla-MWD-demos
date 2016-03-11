/// <reference path="../typings/browser/ambient/angular/index.d.ts" />
var name = 'Jason';
var Person = (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.speak = function () {
        console.log('hi');
    };
    return Person;
}());
var jason = new Person('Jason');
// console.log(jason.name);
jason.speak();
var actualJason = jason;
var Animal = (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.speak = function () {
        console.log('woof');
    };
    return Animal;
}());
var speakingAnimal = new Animal('Fido');
speakingAnimal.speak();
angular.module('myApp', [])
    .controller('myController', function ($http) {
});
// 
