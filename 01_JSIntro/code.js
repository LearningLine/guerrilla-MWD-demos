//console.log("hello from JS!");
//var x = 5;
//x = "five";

// types (6): string, number, boolean, 
// object, function, undefined
// function f(){
// }
// var x = f();
// console.log(x, typeof x);

// var f = function(x, y){
//     return x + y;
// }

// function add(x, y){
//     //return x * y;
// }
// var r = add(3, 4);
// console.log(add, typeof add);

// var person = {
//     name:"Brock",
//     age:21
// };
// console.log(person, typeof person);
// //person.petName = "Roo";
// person["petName"] = "Roo";
// console.log(person, typeof person);
// //delete person.age;
// person.age = null;
// console.log(person, typeof person);

// var x = null;
// console.log(x, typeof x);

// var a = [1, "two", false, [1,2,3]];
// a.push("end");
// var end = a.pop();
// a.unshift("begining");
// var b = a.shift();
// var a = ["a", "b", "c", "d"];
// //a.length;
// a.splice(2, 1);
// a.splice(2, 0, "new value");
// //console.log(a, typeof a);
// 
// var person = {name:"Brock", age:21};
// person.foo = 5;
// for(var key in person){
//     console.log(key, person[key]);
// }

// var b = true;
// console.log(b, typeof b); 

// var s1 = "this is a string";
// var s2 = 'this is another string';
// var s3 = s1 + s2;

// var s = "hello";
// console.log(s, typeof s);

// var n = .3 + .4;
// console.log(n, typeof n);


// var d = new Date();
// console.log(typeof d);

// truthy: !falsy
// falsy (6): false, null, undefined, 0, "", NaN
// var x = "5" - 2;
// //x = new Date();
// 
// console.log(typeof x);
// if (x) {
//     console.log(x, "truthy");
// }
// else{
//     console.log(x, "falsy");
// }

// var a = "0";
// var b = false;
// // strict comparison
// if (a === b){
//     console.log('same');
// }
// else{
//     console.log('not same');
// }

//var x = 10;

// var x = 10;
// x = 10;
// window.x = 10;

var numproducts = "";
if (numproducts){
    
}

// IIFE
var api = (function() {
    "use strict";
    function work() {
        
        x = 20;
        
        work2(); 
        
        function work2(){
            console.log(x);
        }
        
        // var work2 = function(){
        //     console.log(x);
        // }
    }

    work();
    console.log(x);
    
    return {
        work1:work
    };
})();
