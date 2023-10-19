// String
// Function
// Boolean
// Object
// Number // range 2 to power 53
// Null // type will be printed object in console
// symbol // unique

//! Primitive --> Stack Memory used --> We get the copy of variable

// Number
// String
// Boolean
// undefined --> variable declared and value not assigned
// Null --> Empty value

//! Non-Primitive --> Heap memory used --> We get the reference of variable

// Array
// Object
// Date
// Function
// RegExp

// ! Stack Example --> Gives us the copy of variable not the actual reference

let nameOne = "arbab";
let nameTwo = nameOne;
nameTwo = "hello";

console.log("Stack: " + nameOne + " " + nameTwo); //arbab hello
/*
 ________
|        |
|________|
 ________
|        |
|________|
 ________
|        |
|________|
*/

// ! Heap Example --> Gives us the actual reference of variable in memory --> Changing the actual value not the

let userOne = {
  email: "arbab@example.com",
  age: "22",
};

let userTwo = userOne;
userTwo.email = "anjum@example.com";

console.log("Heap: " + userOne.email + " " + userTwo.email); // anjum@gmail.com anjum@gmail.com

/*
 ________
|        |
|        |
|        |
|        |
|        |
|________|
*/

// ! String

const gameName = "Game Name";
const gameName2 = new String("arbab Anjum");

// console.log(gameName.length);
// console.log(gameName2.__proto__); // this tells us the functions that can be used with string

// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("a"));
// console.log(gameName.substring(0, 4)); // Game //negative value cannot be given as param
// console.log(gameName.slice(-9, 4)); // Game //negative value can be given as param
// console.log(gameName.replace(" ", "-"));
// console.log(gameName.includes("abc")); // false
// console.log(gameName.split(" ")); // will convert to array

// ! Numbers

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toFixed(2));
// const otherNumber = 123.89;
// console.log(otherNumber.toPrecision(3));

// const localNumber = 1000000;
// console.log(localNumber.toLocaleString("en-IN"));

// ! Maths

console.log(Math.abs(-5));

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min)) + min);
// console.log(Math.floor(Math.random() * (max - min + 1)) + min);
