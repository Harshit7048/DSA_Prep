async function fetchUppercase(q) {
  // Fake API service that converts a string to uppercase.
  const res = await fetch("https://uppercase.com?q=" + encodeURIComponent(q));
  return await res.text();
}

function mpAsyncLimit(iterable, callbackFn, size) {
    if(!size || size <=0){
      size = iterable.length || 1
    }

    const output = []
    for(let i =0;i<size;i+=size){
      output.push(iterable.slice(i,i+size))
    }

    const results = []

    for(const subarray of output){
      const subResults = await Promise.all(
        subarray.map((ele)=> Promise.resolve(callbackFn(ele)))
      )
      results.push(subResults)
    }

    return results
}

// this could be one of the hardest question I had done in this journey till now

// So what is happening here:
// - we had created a function that is capable of running promises on a iterable item , like array , here just array

// - we have to pass a limit and a callbackFn 
// - according to this limit the array will be cut down in the chunks of the SIZE and then they will be resolved and 


// - Real life case -> like UBER we have 10 customers at same time looking for a ride but hte routes of each is different and also at a time only a limited user can get ride , so as soon as one user get his ride the other one will be in que 