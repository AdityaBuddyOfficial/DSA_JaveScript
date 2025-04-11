/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1: any, m: any, nums2: any, n: any) {
  let idx = m + n - 1;
  let i = m - 1;
  let j = n - 1;
  while (i >= 0 && j >= 0) {
    if (nums1[i] >= nums2[j]) {
      nums1[idx] = nums1[i];
      idx--;
      i--;
    } else {
      nums1[idx] = nums2[j];
      idx--;
      j--;
    }
  }
  while (j >= 0) {
    nums1[idx] = nums2[j];
    idx--;
    j--;
  }

  return nums1;
};

let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [4, 5, 6];
let m = nums1.length - 1;
let n = nums2.length - 1;

console.log(merge(nums1, m, nums2, n));
