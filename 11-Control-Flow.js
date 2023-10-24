// if else switch --> these checks are called control flow

//! Nullish Coalescing Operator (??): null undefined
//* Returns value on the right hand side operand when the value of left hand side operand is null or false

let val1;
val1 = 5 ?? 10; //5
val1 = null ?? 10; //10
val1 = undefined ?? 10; //10
val1 = null ?? 10 ?? 20; //10

console.log(val1);
