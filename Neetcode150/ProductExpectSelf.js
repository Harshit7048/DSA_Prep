console.log("Product of the elements of array expect self");

// In this question we have to return he product of the all expect the i means at index 1 we will return the product fo all others for the index 1

function ProductExpectSelf(nums) {
  // first we will apply a forward array it will take the forward values first
  let forwardArr = [];
  let start = 1;

  for (let i = 0; i < nums.length; i++) {
    forwardArr.push(start);
    start = nums[i] * start;
  }
  //   console.log(forwardArr);

  // here we will have teh backward array it will set up the reverse array that will be multiplied with the forward array values to give us the desired value

  let revArr = [];
  let start2 = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    revArr.unshift(start2 * forwardArr[i]);
    start2 = start2 * nums[i];
    // console.log(forwardArr[i], start2);
  }

  return revArr;
}

let nums = [1, 2, 3, 4];
// ProductExpectSelf(nums);
console.log(ProductExpectSelf(nums));
