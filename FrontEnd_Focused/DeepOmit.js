// we have to create a function that can remove the specified keys from the given object

// so we understands this question perfectly no issue in here , let's explain line by line

function deepOmit(val, keys) {
  // here a check if val is null or not a object
  if (val === null || typeof val !== "object") return val;

  // this is check for keys if they are empty or not present
  if (!keys || keys.length === 0) {
    return Array.isArray(val) ? val.slice() : { ...val };
  }

  // set the unique values fro the keys
  const keySet = new Set(keys || []);

  // if our val is array of objects
  if (Array.isArray(val)) {
    // Preserve array shape; recurse into each element
    // understands it , if the val is array of object or a array that contains a object then this is gonna help
    return val.map((item) => deepOmit(item, keySet));
  }

  // setting the results that will be returned lately
  const result = {};

  // checking if the key is in object
  for (const key of Object.keys(val)) {
    // if we got the key then pass this value and remainng value will be set in the results
    if (keySet.has(key)) continue;
    // setting the remaining value and then again calling the deepOmit
    result[key] = deepOmit(val[key], keys);
  }

  return result;
}

let obj = {
  a: "1",
  b: "2",
  c: "3",
  d: {
    e: "4",
    f: "5",
  },
};
let arrObj = [1, 2, 3, 4, 5];
console.log(deepOmit(arrObj));

console.log(deepOmit(obj));
