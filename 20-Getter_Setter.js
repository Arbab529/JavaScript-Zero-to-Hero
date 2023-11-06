class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
  // Jo property ka name ha usi name ka getter setter bnta ha
  get password() {
    return `${this._password}##**`;
  }
  set password(value) {
    this._password = value;
  }
}

const user = new User("Arbab", "12345");
console.log(user);
console.log(user.password);
