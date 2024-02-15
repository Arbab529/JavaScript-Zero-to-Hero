//! asay function jin ki execution ko hum bich main rok saktay hain or resume kar saktay hain
//! like teen jaga pa ya function ruk k chalay ga 20 pa rukay ga phr 30 pa jub 30 pa rukay ga to pichay code execute nahi ho ga  q k wo already pahlay execute ho chuka ha

// function* simpleGenerator() {
//   console.log("Function Called");
//   yield 20;
//   yield 30;
//   yield 40;
//   console.log("All done");
// }

// let sG = simpleGenerator();
// console.log(sG.next());
// console.log(sG.next());
// console.log(sG.next());
// console.log(sG.next().value);

//! output main value or done ata ha done means kiya function pora execute ho chuka ha ya nahi

//! Real Example in html file

function* generateNumber() {
  let i = 1;
  while (true) {
    i++;
    yield i;
  }
}

let val = generateNumber();

function generateId() {
  console.log(val.next().value);
}
generateId();
generateId();
generateId();
generateId();
generateId();
generateId();
generateId();
generateId();
generateId();
generateId();
