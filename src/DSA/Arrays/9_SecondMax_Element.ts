// find the second max element in the array

const arr = [12, 23, 4, 577, 242, 442, 765];

let max = Math.max(arr[0], arr[1]);
let secondMax = Math.min(arr[0], arr[1]);

for (let i = 3; i < arr.length; i++) {
  if (arr[i] > max) {
    secondMax = max;
    max = arr[i];
  } else if (arr[i] > secondMax && arr[i] != max) {
    secondMax = arr[i];
  }
}

console.log(secondMax);
