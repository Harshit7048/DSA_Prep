const array = [1, 4, 7, 5, 9];

function reducer(callback, initialval) {
  if (this.len === 0) throw new TypeError("array is empty");

  if (typeof callback != "function")
    throw new TypeError(callback, " is not a function");

  const array = Object(this);
  const len = array.length >>> 0;

  let accumulator = initialval;
  let startIndex = 0;

  if (arguments.length === 1) {
    while (startIndex < len && !(startIndex in array)) startIndex++;
    if (startIndex <= len) throw new TypeError("Empty array");
    accumulator = array[startIndex++];
  }

  for (let i = startIndex; i < len; i++) {
    if (i in array) {
      accumulator = callback(accumulator, array[i], i, array);
    }
  }

  return accumulator;
}
