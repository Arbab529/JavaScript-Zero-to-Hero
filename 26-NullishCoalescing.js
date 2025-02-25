//! suppose ap k pass ak name ha user na us ki value nahi dali or result aya undefined or null. or ap chahtay ho k jub b undefined ya null ay to ap custom error through kar do.

let users = {
  student: {
    name: "",
    age: 0,
  },
};

//! is case man agar null, undefined ya empty string ho to b unknown hi show karay ga
console.log(users.student.name || "Unknown");

//! or jub nullish coalescing operator use karo to undefined ya null check karay ga srf empty sting ko nahi check karay ga, agar null ya undefined ho to Unknown show kar day ga
console.log(users.student.name ?? "Unknown");
