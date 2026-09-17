// reason for making this function is just for practice , of how under hte hood the promises.any() works

// so let's have a look of how it works

function any(iterable) {
  // we return a new Promise
  return new Promise((resolve, reject) => {
    // we set the parameters that will indicate the current condition of the promise
    // error for all the errors , numberOfError a indicator  and isFulFilled a checker for fulFilled
    const errors = [];
    let numberOfErrors = 0;
    let isFulfilled = false;

    // then we will iterate the array , and if it's length is 0 then it means that it is a empty and we just throw a new error
    if (iterable.length === 0) {
      reject(new AggregateError([], "All promises were rejected"));
      return;
    }

    // here we will traverse the whole iterable array
    iterable.forEach((ele, i) => {
      // for each ele a Promise( resolve )
      Promise.resolve(ele).then(
        (value) => {
          // making checks fr passed condition
          if (isFulfilled) return;
          isFulfilled = true;
          resolve(value);
        },
        (reason) => {
          // making checks for failed conditions
          if (isFulfilled) return;
          errors[i] = reason;
          numberOfErrors++;
          if (numberOfErrors === iterable.length) {
            reject(new AggregateError(errors, "All promises were rejected"));
          }
        },
      );
    });
  });
}
