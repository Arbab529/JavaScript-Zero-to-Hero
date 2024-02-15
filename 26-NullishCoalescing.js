//! suppose ap k pass ak name ha user na us ki value nahi dali or result aya undefined or null. or ap chahtay ho k jub b undefined ya bull ay to ap custom error through kar do.

let users = {
  student: {
    name: "",
    age: 0,
  },
};

console.log(users.student.name || "Unknown");

//! jub k empty string ha name k pass i don't want k unknown show karay we will use nullish coaleascing
console.log(users.student.name ?? "Unknown");
