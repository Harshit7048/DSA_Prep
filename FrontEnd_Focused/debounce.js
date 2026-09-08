// write a debounce function

const debounce = function (fn, wait) {
  let id = null;

  return function (...args) {
    const context = this;
    clearTimeout(id);
    id = setTimeout(() => {
      id = null;
      fn.apply(context, args);
    }, wait);
  };
};

function logger(text) {
  console.log(text);
}

function caller() {
  const debouncedLogger1 = debounce(logger, 100);
  const debouncedLogger2 = debounce(logger, 400);

  debouncedLogger1("hello 1");
  debouncedLogger1("hello 2"); // cancels hello 1
  debouncedLogger2("hello 3"); // separate debounce with 400ms
  debouncedLogger1("hello 4"); // cancels hello 2
  debouncedLogger1("hello 5"); // cancels hello 4
  debouncedLogger1("hello 6"); // cancels hello 5
  // Only "hello 3" and "hello 6" will be logged

  const debounced = debounce(logger, 300);

  debounced("hello 1 this "); // will be cancelled
  debounced("hello 2 that"); // will be cancelled
  debounced("hello 3 then"); // will be logged after 300ms
  // Only "hello 3" will appear after 300ms
}

caller();

// Implementation walkthrough
// Capture the current call's this value and arguments.
// Cancel the previously scheduled timeout with clearTimeout().
// Schedule a fresh timeout for wait milliseconds.
// When the timeout fires, clear the saved timeout ID and invoke func with Function.prototype.apply() so the delayed call keeps the original call shape.
// Calling func(...args) would forward the arguments but lose the dynamic this value. func.apply(context, args) forwards both.

// If calls happen at t = 0 and t = 50 with wait = 100, the first timeout for t = 100 is canceled. The only callback that can run is the one scheduled by the latest call, at t = 150.
