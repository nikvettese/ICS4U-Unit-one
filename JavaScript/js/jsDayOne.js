//Declare variables (Let and Const are scope sensitive)
let x = 7;
const names = ["Jackie", 'Amy', 'Sunil'];

//Variable types
//Number
//Object
let name = "William";
//String (with a bunch of funtions that come with similar to Java)
let isFinished = false;
//Boolean
let avg = 87.9;
let test = 3/2;
//yields 1.5
let test2 = 3 % 2;
//yields 1 (remainder)

//null vs undefined
//null is on purpose
//undefined is not on purpose
let sample = null;
let sample2;
console.log(sample2); //undefined
//console.log(sample3); gives us an error and states 'not defined'
//typeof null == Object
//typeof 7 == Number
//typeof 'hi' == String 
//typeof Array() == Object

//== vs ===
//3 equals checks for type as well, same: != vs !==
//7 == '7' is true
//7 === '7' is false 
//false == 0 is true
//false === 0 is false
//0 and 1 can be treated as booleans in some languages
//=== will make it false because they are different types

//if statements 
//these are exactly the same in JS and Java
//ternary operator
let x = 7;
let isEven
if (x % 2 === 0)
    isEven = true;
else
    isEven = false;
isEven = (x % 2 == 0) ? true : false;
//10 over is yellow,
//20 over or more is red
//otherwise green
let colour = (x > 20) ? 'red' : (x > 10) ? 'yellow' : 'green';
console.log(colour);

//Creating functions
function nameOfFunction(x, y) {
    return x + y;
} 
console.log(nameOfFunction(3, 2));
let func = function(x, y) {
    return x * y;
}
//anonymous function (function is stored in a variable)

//arrays
const numbers = Array(10);
numbers[4] = 3;
numbers.push(1); 
//adds to the end of the array and makes it bigger
numbers.pop();
//removes the last element and makes the array length smaller

//types of for loops for arrays
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//hits EVERY element even if it is undefined
for (let ii = 0; ii < numbers.length; ii++) {
    if (numbers[i] !== undefined)
        console.log(numbers[ii]);
}
//Like a foreach loop that skips over the undefined]
for(let name of names) {
    console.log(name);
}
const colours = [];
//const colours = Array();
//'for of' is for arrays (to iterate through the values of the array)
//'for in' is for map/objects and it allows you to iterate through the properties
//You can get the value using obj[prop]
colours.push('red');
colours.push('green');
colours.push('yellow');

//Map/object
const marks = [80, 87, 92, 88];
let student = {};
student.name = 'Jack Spratt';
student.id = '1126804';
student.marks == marks;
/*
student.average = function() {
    let totalMarks = 0;
    for (let mark of this.marks) {
        totalMarks += mark;
    }
    return totalMarks / this.marks.length;
}
console.log(student.average());
*/

//Iterate through a map
//Properties that are variables can go in [] instead of using the . operator
for (let prop in student) {
    if (typeof student[prop] !== 'function')
        console.log(student[prop])
}
console.log(student['id']);

//JSON and JSON methods
//JSON stands for JavaScript Object Notation 
const jsonString = JSON.stringify(names);
console.log(names);
console.log(jsonString);
const jsonString2 = '["hello", "steve", "paper"]';
console.log(JSON.parse(jsonString2));
//JSON.parse converts a JSON string into the appropriate object / array
//JSON.stringify converts the array or object into a JSON string.
console.log(JSON.stringify(student));