/// <reference path="../typings/browser/ambient/angular/index.d.ts" />

var name: string = 'Jason';
// name = 123;

interface ISpeak {
    speak();
}

class Person implements ISpeak {
    constructor(public name: string, public age?: number) {
    }
    
    speak() {
        console.log('hi');        
    }
}

var jason: ISpeak = new Person('Jason');

// console.log(jason.name);

jason.speak();

var actualJason = <Person>jason;

class Animal {
    constructor(public name) {
    }
    
    speak() {
        console.log('woof');
    }
}

var speakingAnimal: ISpeak = new Animal('Fido');

speakingAnimal.speak();

angular.module('myApp', [])
    .controller('myController', function($http: ng.IHttpService) {
    })
;


//