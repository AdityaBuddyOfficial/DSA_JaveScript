function reverseArray(arr: number[]) {
  let start = 0;
  let end = arr.length - 1;
  let temp;

  while (start < end) {
    temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    start++;
    end--;
  }
  return arr;
}

const array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("reversedArray", reverseArray(array));

// one more way to reverse the array is by using the reverse function in js

function reverse(arr: number[]) {
  const arrayReversed = arr.reverse();
  return arrayReversed;
}

console.log(reverse(array));
