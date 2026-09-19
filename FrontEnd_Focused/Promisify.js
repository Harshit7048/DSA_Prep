// So this was truly a easy one and I kinda thought with the name that it's a hard one

// Basically waht we had to do is to create a function that will return a function where we can pass the arguments with the last argument is the callback function ( which is a error handler) and the we kinda have to make this as a error first , so we need to check for the error

function promisify(func) {
  // returning hte function that takes all the passed args
  return function (...args) {
    // returning new promise as it's needed
    return new Promise((resolve, reject) => {
      // call the func with the .call method and also providing the "this" and callback (err,value)
      func.call(this, ...args, (err, value) => {
        //making the error statement and setting promise state on based of that
        if (err) {
          reject(err);
        } else {
          resolve(value);
        }
      });
    });
  };
}
