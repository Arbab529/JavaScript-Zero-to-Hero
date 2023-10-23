//! ---------------------------------
//! Merge Arrays
//! ---------------------------------

// const arrA = [1, 2, 3]
// const arrB = [4, 5, 6]
// arrA.push(arrB) --> [1, 2, [4, 5, 6]]
// arrA.concat(arrB) --> [1, 2, 3, 4, 5, 6] --> returns new combines array
// [...arrA, ...arrB];

//! ---------------------------------
//! Flat Array
//! ---------------------------------

// const flatArray = [1, 2, 3, 4, [5, 6], 7, 8, [9, [10, 11]], 12];
// const newFlatArray = flatArray.flat(Infinity);
// console.log(newFlatArray);

//! ---------------------------------
//! Convert to Array
//! ---------------------------------

const name = "Arbab";
console.log(Array.from(name));
console.log([...name]);

let scoreA = 10;
let scoreB = 20;
let scoreC = 30;

console.log(Array.of(scoreA, scoreB, scoreC));
