const arr = [1, 2, 3, 4, 5];
//! For Loop
// console.log("For Loop");
for (let index = 0; index < arr.length; index++) {
  //   console.log(arr[index]);
}

//! For Of Loop
// console.log("For Of"); // Return Values -- can be used for strings also
const name = "Arbab";
for (const num of name) {
  //   console.log(num);
}

// ! For In Loop
// console.log("For In"); // Return index -- can be used for strings also
const greet = "Arbab";
for (const num in greet) {
  //   console.log(num);
}

//! For in loop on Object
const myObj = {
  name: "Arbab",
  age: 20,
  email: "arbab@gmail.com",
};

for (const key in myObj) {
  console.log(key);
  console.log(myObj[key]);
}

// ! For each loop
// console.log("For Each"); // Return index -- can be used for array and object only
// arr.forEach((element) => console.log(element));

//! Map loop
// console.log("Map");
const map = new Map();
map.set("name", "Arbab");
map.set("age", 20);
// console.log(map.get("name"));

for (const [key, value] of map) {
  //   console.log(`${key} :- ${value}`);
}

//! Filter and chaining => Result of first filter will be passed to second filter

const filterValue = arr.filter((value) => value > 2);
// .filter((value) => value > 3);
console.log(filterValue);
console.log(arr);

//! Map

const mapValue = arr.map((value) => value > 2);
console.log(filterValue);
console.log(arr);

//! Reduce => takes the previous value and current value with initial value and perform action accordingly

const arr1 = [1, 2, 3, 4];
const initialValue = 0;
const sumOfArr = arr1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(`Reduce: ${sumOfArr}`);
