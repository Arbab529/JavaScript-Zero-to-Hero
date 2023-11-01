function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.incrementScore = function () {
  console.log("Score: ", this.score + 1);
};

createUser.prototype.printUser = function () {
  console.log("Username: ", this.username);
};

const userOne = new createUser("Arbab", 25);
const userTwo = new createUser("Arain", 30);

userOne.incrementScore();
userOne.printUser();

// ---------------------------------------
//! Prototypal Inheritance
// ---------------------------------------

const user = {
  name: "demo",
  email: "demo@example.com",
};

const techSupport = {
  isAvailable: true,
  //   __proto__: user, // inheritance way 1
};

// first way: 1
// __proto__: user;

// second way: 2
// techSupport.__proto__ = user;

// Third way: 3
// techSupport.__proto__ = user;
// Object.setPrototypeOf(techSupport, user); //techSupport main tmam user ki properties ajayn gi

console.log(techSupport);

//! Trim String using prototype
let anotherUser = "Arbab Anjum     ";
String.prototype.trimData = function () {
  console.log(`This user has been trimmed: ${this.trim().length}`);
};

anotherUser.trimData();
