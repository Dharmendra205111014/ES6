/**
 * =====================================Block level scope==========================================
 */
var x = 10;
if(true){
    x = 20;
}
console.log(x) // 20

//Try below
var x = 10;
if(true){
    let x = 20;
}
console.log(x) //10

//Try below
function adder(x) {
	if(x) {
		let y = 10;
		x +=y;
	}
	console.log(x +' '+y);
}

//Try below
var x = 10;
var x = 20;
consle.log(x);

var x = 10;
//let x = 20; //throws error
//(Let and var can not be in same scope)


/**
 * =====================================Default value==========================================
 */

//With ES5, if want to have default value for function
function add(a,b) {
	a = a || 0;
	b = b || 0;
	return a+b;
}

//With ES6, you can do little different
function add(a=0, b=0) {
	return a+b;
}

/**
 * =========================================Const=======================================
 */
// const is added in ES6
const me = "Dharmendra";
me = "Varun" // Error

/**
 * ========================================Array split =================================
 */

//Try below
var a1 = [1,2,3,4]
var a2 = a1;
var a3 = [...a1]; //Array split
a1.push(5);
console.log(a1);
console.log(a2);
console.log(a3);

