function maxElement(arr: number[]) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
function minElement(arr: number[]) {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

export default function display() {
  const array: number[] = [2, 3, 4, 5, 6, 7, 8];

  console.log("max element of array is", maxElement(array));
  console.log("min element of array is", minElement(array));
}
