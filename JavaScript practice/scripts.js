//Getting the innerHTML of a element with certain id
document.getElementById("additiontest").innerHTML = 5+6;
//writes inside the document wherever you are
//doing this after the document is loaded will delete all previous info
//used mostly for testing
//writes at the end
document.write(5+6)
//alert
//makes popups
//alert("Hi Philip")
/*Multiline 
comment 
like this*/
//variables
//define the variables
var x,y,z;
//at this point the values are undefined
//also can be defined on the same line
var x =3,y = 5;
//redeclaring the variable does not make it lose its value
var x;
x = 3;
y = 5;
//arithemetic
z = x+y;
document.getElementById("variablestest").innerHTML = x+"+"+y+"="+z
z = x+y;
z = x-y;
z = x*y;
z = x**y;
z = x/y;
z = x%y;
z ++;
z --;
x += y;
x -= y;
x *= y;
x /= y;
x %= y;
x **= y;
//concat strings
var txt1 = "John";
var txt2 = "Doe";
var txt3 = txt1+" "+txt2;
//comparison operators
x == y;
x === y;
x != y;
//not equal value or not equal type
x !== y; 
x > y;
x < y;
x >= y;
x <= y;
// ? is a ternary operator, eg
//function(x + y) ? "greater than zero":"less than zero"
//or something like that
//bitwise operators
//AND
5 & 1;
//OR
5 | 1;
//NOT
//5 ~ 1;
//XOR (must be different)
//5 ^ 1;
//Zero fill left shift
5 << 1;
//signed right shift
5 >> 1;
//zero fill right shift
5 >>> 1;
//typeof
typeof ""; //"string"
typeof "John";//"string"
typeof 0; //"number"
var car;
typeof car; //"undefined"
var car = undefined;
null //datatype is an object
null === undefined; //false
null == undefined; //true
//functions
function multiplication(a1,a2){
	return a1*a2;
};
//objects
var car = {type:"Fiat",model:"500",year:"2000"};
//accessing properties of objects
//method 1
//alert(car.type);
//method 2
//alert(car["type"]);
//storing functions in objects
//self in python is equal to this in js
var person = {
	firstName: "John",
	lastName: "Doe",
	id: 5566,
	fullName: function(){
		return this.firstName + " " + this.lastName;
	}
};
//alert(person.fullName())
//take note, when accessing without the (), it only takes the function declaration
person.fullName;

var addandans = function(){
	first_no = document.getElementById("no1").value;
	second_no = document.getElementById("no2").value;
	console.log(2212);
	console.log(second_no);
	//converting to number is no required except for addition
	ans = Number(first_no) + Number(second_no);
	document.getElementById("ans1").innerHTML = ans;
};
//numbers in javascript
var x = 123e5;
var y = 123e-5;
//javascript intpreter works from left to right
var expectationvsreality = 1+2+'3'
//expectation:123,reality:33
//NaN is a type of number
console.log("type of NaN is" + typeof NaN);
//infinity
var x = Infinity;
console.log(x);
//number methods
var x = 123;
//converting to string
x.toString();
//converting to exponential
x.toExponential(4);
//makes it four sf
//Making a fixed number of decimal places
x.toFixed(2);
//makes it 2 dp FIXED
//Making a fixed number of significant figures
x.toPrecision(4);
//converting objects to numbers
var y = "17";
y = Number(y);
y = parseInt(y);
y = parseFloat(y);
//Getting the largest possible number/smallest possible in js
var x = Number.MAX_VALUE;
var y = Number.MIN_VALUE;
//arrays in js
var array1 = [1,2,3,4,5];
console.log(array1);
//Looping through an array
//also the safest method of looping through
var fruits, text, fLen, i;
fruits = ["Banana", "Orange", "Apple", "Mango"];
fLen = fruits.length;

text = "<ul>";
for (i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
};

//Making the function for the foreach
function myFunction(value){
	text += "<li>" + value + "</li>";
};


//alternatively use the foreach function
//Imagine replacing myFunction below with myFunction(value)
fruits.forEach(myFunction);
fruits.forEach(function(value){text += "<li>" + value + "</li>";});

console.log(myFunction)

text += "</ul>";

//adding array elements
//Adding from the back
fruits.push("potato");
fruits[fruits.length] = "last potato";
//checking if something is an array
fruits instanceof Array;
//returns true

//Array methods
//converting to string
var fruits_string = fruits.toString();
console.log(fruits_string);
//converting to string but specifying the sperator
var starfruit_string = fruits.join("*");
console.log(starfruit_string);

//removing the last element from an array
var popped = fruits.pop();
//also returns the value that was popped

//removing the first element from an array
var wasfirst = fruits.shift();

//Adding new element at the beginning of an array
var new_length = fruits.unshift("durian, king of the fruits");
//returns the new lenght of the array

//deleting elements
delete fruits[0];
//WARNING: Leaves undefined holes in the array

//Adding new items in the center (splicing)
fruits.splice(2,0,"Lemon","Kiwi");
//new element is element 2
//remove 0 elements, inclusive of element 2
//remainder are just elements to be added

//joining arrays
var vegetables = ['brocolli','brinjol'];
var ewws = fruits.concat(vegetables, vegetables);
//concat is a method, not a function!
//does not change existing arrays but creates a new one
//can concat more than one array

//slicing arrays
//from first value to last value (if specified)
var some = ewws.slice(3,4);

//sorting arrays
//performs alphabetically
ewws.sort();

//reversing an array
ewws.reverse();

//numeric sorting
var numberss = [2,5,7,4,2];
//ascending
numberss.sort(function(a,b){return(a-b)});
//descending
numberss.sort(function(a,b){return b-a});
//logic
// if negative, a before b, if positive, b before a

//finding maximum or min of array
//the ... spreads the 1,2 and 3 into 3 distinct values
Math.max(...[1,2,3]);
//apply is a default js method, which passes array into params
Math.max(null,[1,2,3]);
//same for math.min

//sorting objects
cars = [
	{brand:"Volvo",year:"3000"},
	{brand:"Audi",year:"2000"}
];

cars.sort(function(a,b) {return a.year-b.year});



document.getElementById("fruitslist").innerHTML = text;

//applying operation on every element in array
var numbers1 = [1,2,3,4,5,6,7];
var numbers_squared = numbers1.map(squarefunc);
//the map method inputs three params
function squarefunc(value,index,array){
	return value**2
};
console.log(numbers_squared);

//create new array but only with elements that pass a test
numbers_squared = numbers_squared.filter(remove_above);

function remove_above(value,index,array){
	return value < 20;
};

console.log(numbers_squared);

//reducing all elements in an array to single value
var total_of_squares = numbers_squared.reduce(total_func);
//also can be done from right to left
var total_of_squares = numbers_squared.reduceRight(total_func);

//total is the initial value or the previously returned value
function total_func(total, value, index, array) {
	return total+value
};

console.log(total_of_squares);

//check if every value of array passes test
numbers_squared.every(above18)
//check if at least some value of an array passes test
numbers_squared.some(above18)

function above18(value,index,array){
	return value>18
}

//finding the index of a particular element value
//returns negative one if unable to find
//must be the same type of value too
//value to look for, followed by index to start at
console.log(numbers_squared.indexOf(1,0));
//also possible to look from the back
//using negative numbers gives the starting position from the end
numbers_squared.lastIndexOf(1,-1);

//find first value of array that passes test function
//relatively new function, not really supported in older browsers
numbers_squared.find(above18);
//also possible to find the index of said case
numbers_squared.findIndex(above18);

//For information on dates, just go to w3 schools
//relatively straightforward, get methods and set methods to change the date, etc

//Math objects
//pi
Math.PI;

//rounding to nearest integer
Math.round(4.7);

//power
Math.pow(8,2);

//sqrt
Math.sqrt(64);

//abs
Math.abs(-4.7);

//ceiling and floor
Math.ceil(4.7);
Math.floor(4.7);

//sin cos tan
Math.sin(1);
var y = 1;
var x = 2;
//returns the difference of the quotient
Math.atan2(y,x);
//etc

//random numbers
Math.random();
//returns from 0(inclusive) to 1(exclusive)

//others
Math.E;        // returns Euler's number
Math.PI;       // returns PI
Math.SQRT2;    // returns the square root of 2
Math.SQRT1_2;  // returns the square root of 1/2
Math.LN2;      // returns the natural logarithm of 2
Math.LN10;     // returns the natural logarithm of 10
Math.LOG2E;    // returns base 2 logarithm of E
Math.LOG10E;   // returns base 10 logarithm of E 

//natural log NO LN!
Math.log(x)

//if else
var x = 10;
if (x>10){
	console.log("greater than 10");
} else if (x<10){
	console.log("less than 10");
} else {
	console.log("is 10");
};

x = 9;
//switch case
switch(x) {
	case 10:
		console.log("is 10");
		break;
		//the break is necessary to not run the other cases
	default:
		console.log("not 10");
		break;
}

//for loop
//first value sets intial condition, second the requirement, third what happens at the end of the loop
for (var i=0;i<5;i++){
	console.log(i);
};
//for in loop
var drinks = ['somersby','absolute','gin'];
for (drink_no in drinks){
	console.log(drinks[drink_no]);
}

//while loops
var i = 0;
while (i<10){
	console.log(i);
	i++;
};

//do while loop, where the loop is executed at least once
do{
	console.log(i);
	i++;
}
while(i<10);

//continue statement, skip current loop iteration
for (i=0;i<10;i++){
	if (i%2==0) hack:{
		continue;
	};
	console.log(i);
};

//you can label code blocks so you can jump out of them
wow:{
	console.log("dont cut me off -- ");
	break wow;
	console.log("--please");
};

//conversion between types
var x = 10;

x = string(x)
//also can use a method
x.toString();
x.toExponential();
x.toFixed();
x.toPrecision();

//unary + operator to convert to numbers
var y = "10";
x = + y;
//x is now a number

//regular expression
//most often used with string methods search and replace
var pattern = /W0wiiIamGoNNaGetRegEXed/i;
