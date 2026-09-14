const promiseAll = function (promises) {
  // first of all let's resolve the values that are not a promise from the arguments
  const _promises = promises.map((item) =>
    item instanceof Promise ? item : Promise.resolve(item),
  );

  // then if all are resolved then simply return , or empty then return
  if (_promises.length === 0) {
    return Promise.resolve([]);
  }

  // main implementation
  return new Promise((resolve, reject) => {
    // first implement a results array and some checkers ( isError , fulfilledCount) , if there's error then we will return and if it's fullfilled then we will increase the count
    const results = [];
    let isErrored = false;
    let fulfilledCount = 0;

    // here for every single promise we will resolve it and then push it in results
    _promises.forEach((promise, index) => {
      promise.then(
        (value) => {
          if (isErrored) return;
          results[index] = value;

          fulfilledCount += 1;
          // if fulfilled count is full with all the promises then we simply resolve the results and return to user
          if (fulfilledCount == _promises.length) {
            resolve(results);
          }
        },
        // if there's error we will return the error and update the isError
        (error) => {
          if (isErrored) return;
          isErrored = true;
          reject(error);
        },
      );
    });
  });
};

// yeh question thoda sa tricky bhi tha aur ek achi practice bhi tha, basically isme yeh concept hai -> promises.all() jo kam krta hai ki sare promise ek sath resolve krne ka aur agr unme se koi bhi ek reject krta hai toh sare reject hote hai , yeh functionality humne apne aap se crate kri hai ,
