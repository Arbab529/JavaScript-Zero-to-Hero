//! JS Execution Context

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

//! 1- Execution Phase
// this;

//! 2- Memory Creation Phase
// val1 = undefined
// val2 = undefined
// addNum = definition
// result1 = undefined
// result2 = undefined

//! 3- Execution Phase
// val1 = 10
// val2 = 5

// addNum = [New variable Environment + Execution Thread Will be created] --> Will again follow memory creation phase and execution phase
// total will be returned to Global execution
// result1 = 15

// addNum = [New variable Environment + Execution Thread Will be created] --> Will again follow memory creation phase and execution phase
// total will be returned to Global execution
// result2 = 13
