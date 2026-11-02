console.log("two sum the typical DSA question");

let nums1 = [3, 4, 5, 6];

function twoSum(nums, target) {
  let indices = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        indices.push(i, j);
        return indices;
      }
    }
  }
  return indices;
}

console.log(twoSum(nums1, 7));

console.log("run done");

// Two sum is the typical question to start the DSA , in this one ew had to return the indices of the elements that sums up to the given target

// here we used the brute force with the for loop. time complexity -> O(n^2)
