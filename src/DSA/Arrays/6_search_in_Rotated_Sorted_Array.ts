function searchRotatedSortedArray(arr: any, target: any) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let mid = start + (end - start) / 2;

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
}
