//console.log("hello node")

// number
//var x = .1 + .2;
//console.log(x);

// string
//var x = 'hello!';
//console.log(typeof x)

// bool
//var x = true;
//console.log(typeof x);

// function
// function x(a, b) {
// 	var c = a + b;
// 	console.log("this is a function!")
// 	return c;
// }
// var result = x(1, 2);
// console.log(result);

// var person = {};
// person["name"] = "Brock";
// person.speak = function () {
// 	console.log("i'm a person")
// }
// person.speak();

//console.log(person["name"]);

// function add(a, b) {
// 	console.log(typeof b);
// }

// var x = add(1);
// console.log(x, typeof x);

//var d = new Date();
//console.log(typeof d, d)

// 6.5th
// var a = [1, "2", false, {name:"Brock"}, [1,2,3]];
// //a.unshift(22);
// //var val = a.shift();
// //console.log(val, a.length)
// for(var i = 0; i < a.length; i++){
// 	console.log(a[i]);
// }

// var a = {};
// //console.log(a.toString());
// var b = "2";
// var c = a - b;
//console.log(c, typeof c);

// var a = ' '.trim();
// //console.log(typeof a)
// // falsy: false, 0, undefined, null, NaN, ''
// if (a){
// 	console.log('truthy');
// }
// else{
// 	console.log('falsy');
// }

// var a = false;
// var b = '0';
// if (a === b) {
// 	console.log('same')
// }
// else{
// 	console.log('not same')
// }

// var a = {name:"Brock", age:21};
// for(var key in a){
// 	console.log(key, a[key]);	
// }
// for(var i = 0; i < a.length; i++){
// 	console.log(a[i]);
// }


//var x;

// function doWork(){
// 	var x = 20;

// 	doWork2();

// 	if (true){
// 		var doWork2 = function(){
// 			//x = 30;
// 			console.log(x);
// 		}
// 	}

// 	// var doWork3 = function(){
// 	// 	//x = 30;
// 	// 	console.log(x);
// 	// }

// 	var x = 120;
// 	console.log(x);
// }

// doWork();
// //console.log(x);

// var x = 10;
// x = 10;
// global.x = 10;
//console.log(global);
//var window = global;

// iife
mycoolstuff = (function(){
	'use strict';

	function work() {
		var x = 20;
		console.log(x);
	}

	return {
		work : work,
		work2: work
	};
})();

mycoolstuff.work();
