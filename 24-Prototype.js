//! jub ka object k features kisi or object man ap use karo usay protoyping kahtay hain
//! Prototype are the mechanism by which JS object inherit features from one another

let user = {
  getFullName: function () {
    return this.firstname + " " + this.lastname;
  },
  getAge: function () {
    return new Date().getFullYear() - this.birth;
  },
};
let student = {
  firstname: "arbab",
  lastname: "anjum",
  birth: 2000,
};

let teacher = {
  firstname: "Ali",
  lastname: "Arain",
  birth: 1989,
};

teacher.__proto__ = user;
student.__proto__ = user;

console.log(student.getAge());
console.log(teacher.getAge());

//! prototype directly load nahi karta data jub chahiya hota ha tub load kartay hain

//! kisi b object k sath poray project man ya prototype use kar saktay hain

Object.prototype.myObj = "Hello World";
Object.prototype.myFunc = () => {
  return "Hello World!";
};
// user.myFunc()

//! kisi b string k sath poray project man ya prototype use kar saktay hain

String.prototype.myStr = "Hello World";
// "hello".myStr
