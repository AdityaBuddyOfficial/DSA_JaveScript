const arr = [12, 4, 7, 9, 2, 23, 25, 41, 30, 40, 28, 42, 30, 44, 48, 43, 50];
const numberOfStudents = 5;
console.log(ChocolateDistribution(arr, numberOfStudents));

function ChocolateDistribution(arr: number[], numberOfStudents: number) {
  arr.sort((a, b) => a - b);
  let minDiff = Infinity;
  for (let i = 0; i + numberOfStudents - 1 < arr.length; i++) {
    let diff = arr[i + numberOfStudents - 1] - arr[i];
    if (diff < minDiff) {
      minDiff = diff;
    }
  }
  return minDiff;
}
