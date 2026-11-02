console.log(
  "we have to write a function that will return the length of the largest consecutive array",
);

const array = [0, 5, 6, 4, 8, 3, 9, 2, 1, 7];

function largestConsecutive(nums) {
  if (nums.length <= 0 || nums === null) return 0;

  let set = new Set(nums);
  let max = 0;

  for (let num of set) {
    if (set.has(num - 1)) {
      continue;
    }

    let currentMax = 1;
    let currentNum = num;

    while (set.has(currentNum + 1)) {
      currentMax++;
      currentNum++;
    }
    max = Math.max(max, currentMax);
  }

  return max;
}
