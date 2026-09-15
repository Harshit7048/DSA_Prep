// we have to implement a function which can deeply check if two values are equal or not

// function deepCheck(valueA, valueB) {
//   if (valueA === valueB) {
//     return true;
//   }

//   // and the string issue was here because NAN === NAN and we were before checking if they are equal
//   if (Number.isNaN(valueA) && Number.isNaN(valueB)) return true;

//   if (
//     typeof valueA !== "object" ||
//     valueA == null ||
//     typeof valueB !== "object" ||
//     valueB == null
//   ) {
//     return false;
//   }

//   const keysA = Object.keys(valueA);
//   const keysB = Object.keys(valueB);

//   if (keysA.length !== keysB.length) return false;

//   // so the thing here is we have to check the keys values not just hte keys
//   for (const key of keysA) {
//     if (!keysB.includes(key) || !deepCheck(valueA[key], valueB[key])) {
//       return false;
//     }
//   }

//   return true;
// }

console.log(deepCheck({ id: "1", name: 1234 }, { id: "1", name: "harshit" }));
console.log(deepCheck("hello", "helo"));
console.log(deepCheck(["1", "2", 3, 4, 5, 5], ["1", "2", 3]));

function deepCheck(valueA, valueB) {
  // Primitives & reference equality (also handles NaN via Object.is)
  if (Object.is(valueA, valueB)) return true;

  // Both must be non-null objects
  if (
    typeof valueA !== "object" ||
    valueA === null ||
    typeof valueB !== "object" ||
    valueB === null
  )
    return false;

  // Arrays match arrays; plain objects match plain objects
  const aIsArr = Array.isArray(valueA),
    bIsArr = Array.isArray(valueB);
  if (aIsArr !== bIsArr) return false;

  // Same prototype (filters Date/Map/Set/class instances vs plain objects)
  if (Object.getPrototypeOf(valueA) !== Object.getPrototypeOf(valueB))
    return false;

  if (aIsArr) {
    if (valueA.length !== valueB.length) return false;
    for (let i = 0; i < valueA.length; i++) {
      const aHas = i in valueA;
      const bHas = i in valueB;
      if (aHas !== bHas) return false; // hole vs undefined
      if (aHas && !deepCheck(valueA[i], valueB[i])) return false;
    }
    return true;
  }

  const keysA = Object.keys(valueA),
    keysB = Object.keys(valueB);
  if (keysA.length !== keysB.length) return false;

  // Same keys + recursively equal values (covers array indices too)
  return keysA.every(
    (key) => Object.hasOwn(valueB, key) && deepCheck(valueA[key], valueB[key]),
  );
}
