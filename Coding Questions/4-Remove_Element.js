//! Method : 1

// function removeDuplicate(array) {
//   const uniqueElements = [];
//   for (let i = 0; i < array.length; i++) {
//     if (uniqueElements.indexOf(array[i]) === -1) {
//       uniqueElements.push(array[i]);
//     }
//   }
//   return uniqueElements;
// }

//! Method : 2

function removeDuplicate(array) {
  return [...new Set(array)];
}

const result = removeDuplicate([
  1, 2, 2, 3, 4, 5, 5, 6, 7, 8, 8, 8, 9, 9, 10, 10,
]);
console.log(`Array after removing duplicate elements: ${result}`);
