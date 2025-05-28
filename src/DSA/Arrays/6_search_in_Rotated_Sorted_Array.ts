/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (arr:any, target:any) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[start] <= arr[mid]) {
      if (arr[start] <= target && target <= arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (arr[mid] <= target && target <= arr[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return -1;
};

const arr = [4, 5, 6, 7, 0, 1, 2];
search(arr, 7);
