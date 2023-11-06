const mySym = Symbol("Key1");
const user = {
  name: "arbab",
  email: "arbab@gmail.com",
  [mySym]: "myKey1",
};

console.log(user);
console.log(user[mySym]);

user.email = "arbab@hmail.com";
Object.freeze(user);
user.email = "arbab@mail.com";
console.log("Freeze: ", user);

//! Singletone

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d", 5: { 6: "e" } };

const resultObj = Object.assign({}, obj1, obj2);
console.log({ ...obj1, ...obj2 });
console.log(resultObj);
console.log(Object.keys(resultObj));
console.log(Object.values(resultObj));
console.log(Object.entries(resultObj));
console.log(resultObj.hasOwnProperty([1]));

//! Object ko hum universal constant PI ki tarhan kasay bna saktay hain k koi b usay edit na kar sakay

const descripter = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descripter);

const userObject = {
  name: "Arbab",
  role: "user",
};

console.log(Object.getOwnPropertyDescriptor(userObject, "role"));
Object.defineProperty(userObject, "role", {
  writable: false,
  enumerable: false,
});
userObject.name = "arbab";
userObject.role = "admin";
console.log(Object.getOwnPropertyDescriptor(userObject, "role"));
console.log(userObject);
