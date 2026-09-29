console.log("contains duplicate question");

function hasDuplicate(nums) {
  // Brute force of doing this time => O(n^2)

  //   for (let i = 0; i < nums.length; i++) {
  //     for (let j = i + 1; j < nums.length; j++) {
  //       if (nums[i] === nums[j]) {
  //         return true;
  //       }
  //     }
  //   }

  // another method time -> O(n)
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) return true;
  }
  return false;
}

let arr = [1, 2, 3, 4, 5, 6, 1];
console.log(hasDuplicate(arr));
