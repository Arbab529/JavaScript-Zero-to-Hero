class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  encryptPass() {
    console.log(`${this.password}smads`);
    return `${this.password}a,smd`;
  }
}

const user = new User("Arbab", "arbab@gmail.com", "12345");
console.log(user);
console.log(user.encryptPass());

//! Behind the scene

function UserF(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}
UserF.prototype.encryptPass = function () {
  return `${this.password}a,smd`;
};

const user2 = new UserF("Arbab", "arbab@gmail.com", "12345");
console.log(user2);
console.log(user2.encryptPass());
