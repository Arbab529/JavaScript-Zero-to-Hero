//! Hoisting --> inner function can access the scope of outer function

// function One() {
//   const username = "Arbab";
//   function Two() {
//     const website = "http://abc.com";
//     console.log(username);
//   }
//   //   console.log(website);
//   Two();
// }
// One();

//! Hoisting --> variable and function declaration top pa move ho jati ha

// console.log(addOne(2)); //3
// function addOne(num) {
//   return num + 1;
// }

// console.log(addTwo(2)); // error: cannot access before initialization
// const addTwo = function (num) {
//   return num + 2;
// };

//! A closure gives you access to an outer function's scope from an inner function even after the execution has completed, memory main store ho jata ha reference

// function makeFunc() {
//   let name = "Arbab";
//   function myName() {
//     console.log("Name: ", name);
//   }
//   return myName;
// }

// const myFun = makeFunc();
// console.log("Fun2: ", myFun());

//! Multiple closure

function Outer() {
  let num1 = 10;
  return function outerInner() {
    let num2 = 20;
    return function inner() {
      return num1 * num2;
    };
  };
}

const outer = Outer();
const inner = outer();
console.log(inner());
