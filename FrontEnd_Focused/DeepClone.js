// well it's a very good concept and a good question
// A deep clone makes a copy of a JavaScript value such that the copy has no shared references to nested arrays or objects in the original. Mutating the cloned value should never affect the original.

// structuredClone is part of the Web Platform spec. It is available in all evergreen browsers, Node.js 17+, and Deno. It correctly handles plain objects and arrays as well as Date, RegExp, Map, Set, ArrayBuffer, typed arrays, and circular references. None of those work with the older JSON.parse(JSON.stringify(value)) trick.

// there are 2 types of copies shallow and deep
// what is the dif btw them?

// shallow copy -> whey you update in the main object it will also affect in the shallow copy

function deepClone(value) {
  // So this single line here have the capability of deep copying all the values given to it either it's array , object etc.
  return JSON.parse(JSON.stringify(value));
}

const obj1 = { name: "obj1", city: { city: "delhi" } };
console.log(obj1);

const obiClone = deepClone(obj1);
obiClone.city.city = "Mumbai";

console.log(obiClone);

console.log(deepClone("hello"));
