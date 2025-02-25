//! Shallow Copy --> shallow main just object copy hota ha

const shallowObj = {
  name: "Ali",
  age: 25,
};

//? Issue ha is code main q k jub shallowObj ko copy kiya obj main or obj ko modify kiya to due to heep us na reference pa value ko update kar diy jo k shallowObj main b change ho gya

// let obj = shallowObj;
// obj.name = "Arbab";
// console.log(obj);
// console.log(shallowObj);

//? Solution --> hum na values ko destructure kar liya or ak copy bna li

// let obj = { ...shallowObj }; // sol-1
let obj = Object.assign({}, shallowObj); // sol-2
obj.name = "Arbab";
console.log(obj);
console.log(shallowObj);

//! Deep Copy --> deep main nested object copy hota ha

const deepObj = {
  name: "Ali",
  age: 25,
  address: {
    city: "Karachi",
    country: "Pakistan",
  },
};

const ob = JSON.parse(JSON.stringify(deepObj));
ob.address.city = "Lahore";
console.log(ob);
console.log(deepObj);
