// 2.
let originalArray = ["apple", "oranges", " ", "mango", " ", "lemon"];

let transformedArray = originalArray.map(function (element) {
  return element === " " ? "empty string" : element;
});
console.log(transformedArray);

// 3.
// const hobbies doesn't give error on hobbies.push() because const just stores address of array. push() operation doesnt change address

// 4.
// A spread operator is a feature of JavaScript that allows users to access the contents of an iterable object. such as strings, objects literals, and arrays.

// const obj1 = { key1: 1 };
// const obj2 = { ...obj1 };
// obj1.key1 = 4
// console.log(obj1); // { key1: 4 }
// console.log(obj2);// { key1: 1 }

// 5.
// The rest operator in javaScript allows a function to take an indefinite number of arguments and bundle them in an array, thus allowing us to write functions that can accept a variable number of arguments, irrespective of the number of parameters defined

// **********Deliverables:**********

// 1.
// Even though obj2 now has the same properties as obj1, it is still a different object. This is because objects in JavaScript are compared by reference, not by value.

// const obj1 = { key1: 1 };
// const obj2 = { ...obj1 };
// if (obj2 === obj1) {
//   console.log("same objects");
// } else {
//   console.log("different objects");
// }

// 2.
const obj1 = { key1: 1, key2: 2 };
const obj2 = { ...obj1, key1: 1000 };
console.log(obj1); // { key1: 1, key2: 2 }
console.log(obj2); // { key1: 1000, key2: 2 }
