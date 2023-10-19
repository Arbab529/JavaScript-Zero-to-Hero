const accountID = 123;
let accountEmail = "admin@gmail.com";
var accountPassword = "admin";
accountCity = "Washington";
let accountState;

// accountID = 234; // assignment to const not allowed
// accountEmail = "john@gmail.com"; // allowed
// accountPassword = "newPass"; // allowed
// accountCity = "Karachi"; // allowed

console.table([
  accountID,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);

// "use strict" // use the latest version of JS

// ! Number Conversion Operation

// let score = undefined;
// let valueInNumber = Number(score);

// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// "" => 0
// 1 => 1
// null => 0
// undefined => NaN
// true = 1

// ! Boolean Conversion Operation

// let isActive = 1;
// let booleanIsActive = Boolean(1);
// console.log(booleanIsActive);

// 1 => true
// "" => false
// "a" => true

// ! Operations

// console.log(1 + 1); // 2
// console.log("1" + 1); // 11
// console.log("1" + 1 + 1); // 111
// console.log(1 + 1 + "1"); // 21

// ! Prefix - Postfix

let postX = 3;
let postY = postX++;
console.log(postX + " " + postY); // 4 3

let preX = 3;
let preY = ++preX;
console.log(preX + " " + preY); // 4 4
