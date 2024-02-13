// const promiseOne = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Promise Resolved");
//     resolve();
//   }, 1000);
// });

// promiseOne
//   .then(() => {
//     console.log("Completed");
//   })
//   .catch(() => {
//     console.log("Error");
//   });

//!   Resolve Data

// const promiseTwo = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     const obj = { name: "arbab", email: "arbab@email.com" };
//     resolve(obj);
//   }, 1000);
// });

// promiseTwo
//   .then((value) => {
//     console.log(value);
//   })
//   .catch(() => {
//     console.log("Error");
//   });

//!   Error

// const promiseThree = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = true;
//     if (!error) {
//       const obj = { name: "arbab", email: "arbab@email.com" };
//       resolve(obj);
//     } else {
//       reject("Error");
//     }
//   }, 1000);
// });

// promiseThree
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

//!   Chaining

// const promiseFour = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = false;
//     if (!error) {
//       const obj = { name: "arbab", email: "arbab@email.com" };
//       resolve(obj);
//     } else {
//       reject("Error");
//     }
//   }, 1000);
// });

// promiseFour
//   .then((value) => {
//     return value.name;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch((e) => {
//     console.log(e);
//   })
//   .finally(() => {
//     console.log("Finally Done!");
//   });

//!   API data

// const fetchTodo = async () => {
//   try {
//     const resp = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await resp.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// fetchTodo();

//! Promise then then chaining

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//! promise.all --> promises ak sath run karna or agar koi fail ho jay to tmam promises hault ho jatay hain

// const fetchTodo = async () => {
//   const resp = await fetch("https://jsonplaceholder.typicode.com/users");
//   return resp.json();
// };

// const fetchPosts = async () => {
//   const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
//   return resp.json();
// };

// Promise.all([fetchTodo(), fetchPosts()])
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//! promise.allSettled --> agar do apis hain ak fail ho jay or ak data to is kam ata ha

// const fetchTodo = async () => {
//   const resp = await fetch("https://jsonplaceholder.typicode.com/users");
//   return resp.json();
// };

// const fetchPosts = async () => {
//   const resp = await fetch("https://jsonplaceholder.typiode.com/posts");
//   return resp.json();
// };

// Promise.allSettled([fetchTodo(), fetchPosts()])
//   .then(([todo, posts]) => {
//     if (todo.status === "fulfilled") {
//       console.log("Todo's: ", todo.value);
//     } else {
//       console.log("Error: ", todo.reason);
//     }
//     if (posts.status === "fulfilled") {
//       console.log("fethced Posts");
//     } else {
//       console.log("Error: ", posts.reason);
//     }
//   })
//   .catch((error) => {
//     console.log(error);
//   });
