//! This, tells you the current context

// console.log(this); //! abhi current object window ho ga

//! ak object create kartay hain or us main dakhtay hain k current context kiya ho ga this ka

const user = {
  name: "arbab",
  email: "arbab@gmail.com",
  welcomeMessage: function () {
    console.log(this);
  },
};
user.welcomeMessage();

// const user = {
//   name: "arbab",
//   email: "arbab@gmail.com",
//   welcomeMessage: function () {
//     console.log(`${this.name}, Welcome to website`);
//   },
// };

// user.welcomeMessage();

//! This key word function main work nahi karta agar function main direct this likhayn gay to wo window object ko target karay ga agar use strict use karayn gay to undefined day ga q k usay nahi pta ab k this kisay refer karay ga

// function chai() {
//   let username = "hitesh";
//   console.log(this.username); //! undefined --> It works with objects
// }
// chai();

//! Arrow Function main this keyword work nahi karta

// const user = {
//   name: "arbab",
//   email: "arbab@gmail.com",
//   welcomeMessage: () => {
//     console.log(`${this.name}, Welcome to website`); //! undefined
//   },
// };

// user.welcomeMessage();

// const chaiGaram = () => {
//   let username = "hitesh";
//   console.log(this.username); //! undefined --> This doesn't work in arrow function
// };
// chaiGaram();

// const hello1 = () => {
//   return "Welcome Back to website"; //! Explicit return --> When you use return keyword
// };

// const hello2 = () => "Welcome Back to website!"; //! Implicit return --> When you don't use return keyword
