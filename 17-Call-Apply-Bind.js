//! Call ---------------

//! hmara current executional context dosray function ko da data ha
//! mari to execution khatam hoi ya lo mara data tum rakh lo

// function setUserName(username) {
//   this.username = username;
// }

// function createUser(username, email, password) {
//   setUserName.call(this, username);
//   this.email = email;
//   this.password = password;
//   console.log(this);
// }

// const user1 = new createUser("Arbab", "arbab@gmail.com", "1234");
// console.log(user1);

//! Explanation: Ak object k andar dosray object k methods ko use kar saktay hain hum

const person1 = {
  name: "Arbab",
  age: 24,
  details: function (role, experience) {
    return this.name + " " + this.age + " " + role + " " + experience;
  },
};

const person2 = {
  name: "Anjum",
  age: 24,
};

//! person1 main ko details method ha us ko person2 main call karna ha, agar to details method main parameter b use ho ray han to call k second parameter main hum arguments pass kar dayn gay
console.log(person1.details.call(person2, "Team Lead", 2));

//! Apply ---------------
//? call or apply dono exactly same hain in main just difference ya ha k apply main paramters ko hum array ki form main pass kar datay hain

console.log(person1.details.apply(person2, ["Team Lead", 2]));

//! Bind ----------------------
//? Call method jo ha wo directly invoke ho jata ha jub k bind method jo ha wo directly invoke nahi hota humain function return kar data ha

const detail = person1.details.bind(person2, "Team Lead", 2);
console.log(detail());
