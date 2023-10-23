function calculateCartPrice(...num1) {
  return num1;
}

console.log(calculateCartPrice(1, 2, 3, 4, 5));

function calculateCartPrice1(num0, num1, ...num2) {
  return num2;
}

console.log(calculateCartPrice1(1, 2, 3, 4, 5));

//! Immediately invoked function

(function chai() {
  console.log("DB Connected");
})();

(() => {
  console.log("DB Connected");
})();

((name) => {
  console.log(name);
})("Arbab");
