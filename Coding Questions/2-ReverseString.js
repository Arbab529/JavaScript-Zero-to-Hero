//! Method : 1
function reverseString(text) {
  let reverseString = "";
  for (let i = text.length - 1; i >= 0; i--) {
    reverseString += text[i];
  }
  return reverseString;
  //   return text.split("").reverse().join("");
}

//! Method : 2
// function reverseString(text) {
//   return text.split("").reverse().join("");
// }

const result = reverseString("How are You?");
console.log(`Reverse String: ${result}`);
