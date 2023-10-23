//! A closure gives you access to an outer function's scope from an inner function

function One() {
  const username = "Arbab";
  function Two() {
    const website = "http://abc.com";
    console.log(username);
  }
  //   console.log(website);
  Two();
}

One();

// ----------------------------------------------------------------

console.log(addOne(2)); //3
function addOne(num) {
  return num + 1;
}

console.log(addTwo(2)); // error: cannot access before initialization
const addTwo = function (num) {
  return num + 2;
};
