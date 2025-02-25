//! JS Execution Context

// teen executional context hotay hain hmaray pass

// 1- Global EC --> this
// 2- Function EC
// 3- Eval EC

// Example Code

let val1 = 10;
let val2 = 5;
function addNum(num1, num2) {
  const total = num1 + num2;
  return total;
}

let result1 = addNum(val1, val2);
let result2 = addNum(10, 3);

// Jub b code run hota ha in phases main hota ha

//! 1- Execution Phase --> hmaisha run hona hi hona ha
// this;

//! 2- Memory Creation Phase --> memory main variables ko location allocate ki jati ha
// val1 = undefined
// val2 = undefined
// addNum = definition
// result1 = undefined
// result2 = undefined

//! 3- Execution Phase --> execution hoti ha
// val1 = 10
// val2 = 5

// jub add number pa ayn gay to wo ak function ho ga wo apna ak execution context create karay ga
// addNum = [New variable Environment + Execution Thread Will be created] --> Will again follow memory creation phase and execution phase
// total will be returned to Global execution
// result1 = 15

// addNum = [New variable Environment + Execution Thread Will be created] --> Will again follow memory creation phase and execution phase
// total will be returned to Global execution
// result2 = 13

// agar hmaray pass nested functions hain or sub execution context main aray hain to jo sub sa last main ay ga wo sub sa pahlay execute ho ga
