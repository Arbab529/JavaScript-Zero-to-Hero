//! This, tells you the current context

// const user = {
//   name: "arbab",
//   email: "arbab@gmail.com",
//   welcomeMessage: function () {
//     console.log(`${this.name}, Welcome to website`);
//   },
// };

// user.welcomeMessage();

// function chai() {
//   let username = "hitesh";
//   console.log(this.username); // undefined --> It works with objects
// }
// chai();

// Arrow Function

const user = {
  name: "arbab",
  email: "arbab@gmail.com",
  welcomeMessage: () => {
    console.log(`${this.name}, Welcome to website`); //undefined
  },
};

user.welcomeMessage();

// const chaiGaram = () => {
//   let username = "hitesh";
//   console.log(this.username); // undefined --> This doesn't work in arrow function
// };
// chaiGaram();

const hello1 = () => {
  return "Welcome Back to website"; //Explicit return --> When you use return keyword
};

const hello2 = () => "Welcome Back to website"; // Implicit return --> When you don't use return keyword
