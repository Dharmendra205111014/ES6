//http://davidbcalhoun.com/2011/different-ways-of-defining-functions-in-javascript-this-is-madness/
//http://kangax.github.io/nfe/

//#Hoisting (The interesting thing about these is that they are “hoisted” to the top of their scope)
//example 1
function a() {
    console.log("hello");
};
a();

//example 2
a();
function a() {
    console.log("hello");
};

//# Function expressions
//example 1

b();

var b = function() {
    console.log("hello");
};

//example 2

var b = function() {
    console.log("hello");
};

b();

//# mixing Function expression with grouping operators
// selfInvoking
//Example
var sum = (function(a, b){return a+b})(1, 3);

//Try below
var t = (function(){} + "hello"); // result strange => string

//# Named function expression (Not recommended to use)
// Used mostly in case of recursion
//Example

var p = function x(a,b,c) {
	if(a+b < 100) {
		c=a+b;
		return x(a, c, c);
	} else {
		return c;
	}
}

//#Function constructor
// Less recommended
//Example
var lol = Function('a','b','console.log(a+b)'); 
lol(10, 20); // try it

//# Arrow function [ES6]
// This let pass the scope of current function to other callee function
//Example 1:
function mul(arr) {
  this.a = 2;
  return arr.map(function(x) {return x * this.a});
};

mul.call(null, [1, 2, 3]);

//====================================================================================================================//
// some very good example at https://gist.github.com/myshov/05800f083a0afce56e0f782314a103eb
//Invoking 
// Let take a function as exapmle
var testObj = {a:1, b:2}
testObj.add = function (a, b) {
	var x = a || this.a;
	var y = b || this.b;
	return x+y;
}

//1.
testObj.add();
//2.
var p = testObj.add();
//3.
(function(a,b){return a+b})(1,2);
//4.
var p = {a:2,b:6};
testObj.add.call(p, 5);
//5.
testObj.add.apply(p,[5]);
//6.Arrow function
// See below example
var test = {a: "12345"};
test.aaa = function () {
	function pp() {
		try{
			console.log(this.a.length);
		} catch(e) {
			console.error("There is error", e);
		}
		console.log("innerFunction", this);
	};
	console.log("outerThis", this);
	return pp();
}

test.aaa(); // It will throw the error as this.a is undefined in inner function

//=> now with arrow function

var test = {a: "12345"};
test.aaa = function () {
	var pp = ()=> {
		try{
			console.log(this.a.length);
		} catch(e) {
			console.error("There is error", e);
		}
		console.log("innerFunction", this);
	};
	console.log("outerThis", this);
	return pp();
}

test.aaa(); //This does not throw error, infact the scope of outer function is passed to inner function
