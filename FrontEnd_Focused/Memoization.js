// Memoization is just the fancy word for hte caching , The main methodology -> we have to create a function that in sense takes takes a function as a arg and if we call the function ( the memoization ) with same arguments twice it will not run the entire thing again it will give us the cached result from the previous run

// so we can save memory and also increase the processing speed with this

// SO let's break the code of what we had understand of it

// first of all we are taking just a "fn" as argument
function memoize(fn) {
  // we will create a cache as an object , as we are not sure of how many times with different parameters someone can call the func
  const cache = {};

  // returns the function with all hte args
  return function (...args) {
    // to check if it the args related output is in cache we have to convert the args as strings
    const key = JSON.stringify(args);

    // checking if the key is in cache
    if (key in cache) {
      // return the cache
      return cache[key];
    }
    // if not then set a new cache , there 's a issue here and that is we are not passing this keyword , because of it the function can loose the track of the object that it's been called upon
    // cache[key] = fn(...args);
    cache[key] = fn.apply(this, args);

    // then return that cache key
    return cache[key];
  };
}
