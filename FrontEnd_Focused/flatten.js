const array = [1, 2, 3, [4, 5]];
const array2 = [1, 2, 4, 7, 5, 3];

function flatten(arr) {
  if (arr.length === 0) {
    throw new TypeError("Empty Array");
  }
  if (!Array.isArray(arr)) {
    throw new TypeError("Not a array");
  }

  const res = [];

  function helper(arm) {
    for (const val of arm) {
      //so we completed it with the recursion and we kinda did exactly what we were thinking but the in this code there's a mistake we are currently in the helper checking for the "object" but it can fail for null values and some other types
      //   if (typeof val === "object") {
      if (Array.isArray(val)) {
        helper(val);
      } else {
        res.push(val);
      }
    }
    return res;
  }

  return helper(arr);
}
console.log(flatten(array));
