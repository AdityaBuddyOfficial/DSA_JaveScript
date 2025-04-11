/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (arr: any) {
  let piv = -1;
  let n = arr.length - 1;

  function swap(arr: any, i: any, j: any) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  for (let i = n - 1; i >= 0; i--) {
    if (arr[i] < arr[i + 1]) {
      piv = i;
      break;
    }
  }

  if (piv === -1) {
    arr.reverse();
    return arr;
  }

  for (let i = n; i > piv; i--) {
    if (arr[i] > arr[piv]) {
      swap(arr, i, piv);
      break;
    }
  }

  let i = piv + 1;
  let j = n;

  while (i < j) {
    swap(arr, i, j);
    i++;
    j--;
  }
};

const arr = [1, 2, 5, , 4, 3];
console.log(nextPermutation(arr));
