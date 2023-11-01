//! Merge Arrays
// const arrA = [1, 2, 3]
// const arrB = [4, 5, 6]
// arrA.push(arrB) --> [1, 2, [4, 5, 6]]
// arrA.concat(arrB) --> [1, 2, 3, 4, 5, 6] --> returns new combines array
// [...arrA, ...arrB];

//! Flat Array
// const flatArray = [1, 2, 3, 4, [5, 6], 7, 8, [9, [10, 11]], 12];
// const newFlatArray = flatArray.flat(Infinity);
// console.log(newFlatArray);

//! Convert to Array
// const name = "Arbab";
// console.log(Array.from(name));
// console.log([...name]);

// let scoreA = 10;
// let scoreB = 20;
// let scoreC = 30;

// console.log(Array.of(scoreA, scoreB, scoreC));

//! Falsy values
// false, 0, -0, BigInt 0n, "", null, undefined

//! Truthy values
// "0", 'false', [], " ", {}, function (){}

//! Higher Order Functions
// map, reduce, filter, function returning function, setTimeout, setInterval

//! Equality in JS
// Strict comparison ===
// Abstract Comparison ==

//! Event Bubbling
// when you have an event on parent and an event on child so first the child even will be called and then the parent both events will be called from child to parent. like bubble goes from bottom to top

// Suppose you want to stop event bubbling like when you click on child then only that event will be called but parent event should not be called in that case you will use e.stopPropagation(); this will stop event bubbling;

// Suppose if you want to move from parent to child then you will pass true as third parameter to the addEventListener('click',function(e){},true);

//! Blocking vs Non Blocking Code
// Blocking code => read file sync
// Non Blocking code => read file async

//! Callback Hell

//! JS is a prototype based language and its classes are primarily syntactic sugar over existing prototype-based inheritance mechanism

//! OOP
// - Object --> collection of properties and methods
// Constructor function
// Prototype
// Classes
// Instances (new, this)

//! 4 Pillars
// abstraction --> fetch() --> hiding functionality
// inheritance --> Add wrapper over data
// polymorphism --> many ways to do one thing
// inheritance
