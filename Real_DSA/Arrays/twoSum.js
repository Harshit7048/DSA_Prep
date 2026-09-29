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
