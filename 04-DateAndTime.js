//! Date --> represent milliseconds since the midnight at the beginning of the January 1, 1970

const date = new Date();
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toLocaleString());

const myDate = new Date(2000, 0, 23);
console.log(myDate.toDateString());

console.log(new Date("01-14-2023").toLocaleString());
console.log(Math.floor(Date.now() / 1000));
console.log(
  myDate.toLocaleDateString("default", {
    weekday: "long",
  })
);
