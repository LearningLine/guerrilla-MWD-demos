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
