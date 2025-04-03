// function to print all the subarray inside an array
function SubArray(arr: number[]) {
  let n = arr.length;
  for (let st = 0; st < n; st++) {
    for (let end = st; end < n; end++) {
      for (let i = st; i <= end; i++) {
        console.log(arr[i]);
      }
      console.log("");
    }
    console.log("/n");
  }
}

let arr = [1, 2, 3, 4, -5, -2, 3, -6, -1, 4, 2 - 6];
SubArray(arr);

// Function to find the Maximum sum of SubArray by BruteForce Approach

function BruterForceMaxSubArray(arr: any) {
  let Maximum = Number.MIN_SAFE_INTEGER;
  for (let st = 0; st < arr.length; st++) {
    let currSum = 0;
    for (let end = st; end < arr.length; end++) {
      currSum = currSum + arr[end];
      Maximum = Math.max(currSum, Maximum);
    }
  }
  return Maximum;
}

// Kadane's Alogrith for the Maximum Subarray approach
var maxSubArray = function (nums: any) {
  let currSum = 0;
  let maxSum = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    currSum = currSum + nums[i];
    maxSum = Math.max(maxSum, currSum);
    if (currSum < 0) {
      currSum = 0;
    }
  }
  return maxSum;
};
