// JS arrays create shallow copies
// Shallow Copy --> Copy whose properties share the same reference
// Deep Copy --> Copy whose properties do not share the same reference

const arr1 = [1, 2, 3, 4, 5];
const arr2 = new Array(1, 2, 3, 4, 5, 6);

arr1.push(2);
arr1.pop();
arr1.shift();
arr1.unshift(6);

// console.log(arr1);
// console.log(arr1.includes(6));
// console.log(arr1.indexOf(9));

console.log("A: ", arr1);
const sliceArr = arr1.slice(1, 3);
console.log("Slice Array: " + sliceArr);
console.log("B: " + arr1);

const spliceArr = arr1.splice(1, 3);
console.log("Splice Array: " + spliceArr);
console.log("C: " + arr1);
