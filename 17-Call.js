//! hmara current executional context dosray function ko da data ha
//! mari to execution khatam hoi ya lo mara data tum rakh lo

function setUserName(username) {
  this.username = username;
  console.log("Called");
}

function createUser(username, email, password) {
  setUserName.call(this, username);
  this.email = email;
  this.password = password;
  //   console.log(this);
}

const user1 = new createUser("Arbab", "arbab@gmail.com", "1234");
console.log(user1);
