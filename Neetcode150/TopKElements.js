// console.log("TOp K elements");

// // This question was a tricky one but also a good one, we had to return the most frequent integer and the returned array only have the length of the given k

// function topKEle(nums, k) {
//   // so we had to implement these first , a map , a bucket , a result that will be returned
//   let map = {};
//   let bucket = [];
//   let results = [];

//   // here we will first set up the map , if a value exist then we will increment the val otherwise we will initialize it with 1
//   for (let i = 0; i < nums.length; i++) {
//     if (!map[nums[i]]) {
//       map[nums[i]] = 1;
//     } else {
//       map[nums[i]]++;
//     }
//   }

//   // here we will set up the bucket

//   for (let [num, freq] of Object.entries(map)) {
//     if (!bucket[freq]) {
//       bucket[freq] = new Set().add(num);
//     } else {
//       bucket[freq] = bucket[freq].add(num);
//     }
//   }

//   // here a final check to push in results

//   for (let i = bucket.length - 1; i >= 0; i--) {
//     if (bucket[i]) results.push(...bucket[i]);
//     if (results.length === k) break;
//   }

//   return results;
// }

// let nums = [1, 2, 2, 2, 3, 3, 5, 4, 4, 6, 6, 6, 8, 8, 8, 8, 8, 8];

// console.log(topKEle(nums, 2));

console.log("Top K frequent elements Bucket sort");

function TopKEle(nums, k) {
  let map = {};

  for (const num of nums) {
    if (!map[num]) {
      map[num] = 0;
    }
    map[num]++;
  }
  console.log(map);

  let bucket = [];

  for (let i = 0; i < nums.length + 1; i++) {
    bucket.push([]);
  }

  for (const key in map) {
    bucket[map[key]].push(key);
  }

  console.log(bucket);

  let sol = [];

  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i].length > 0) {
      sol = [...sol, ...bucket[i]];
      if (sol.length === k) {
        return sol;
      }
    }
  }
}

let nums = [7, 7];

TopKEle(nums, 2);

console.log(TopKEle(nums, 2));
