const arr = [1, 2, 3, 4, 2, 3, 1];

// by brute force method

var containsDuplicate = function (nums: number[]) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
};

console.log(containsDuplicate(arr));

// by sorting method

function SortDuplicate(arr: number[]) {
  arr.sort((a, b) => a - b);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      return true;
    }
  }
  return false;
}
console.log(SortDuplicate(arr));

// by hashSet method

function DuplicateByHashSet(arr: number[]) {
  const data = new Set();
  for (let n of arr) {
    if (data.has(n)) {
      return true;
    }
    data.add(n);
  }
  return false;
}
console.log(DuplicateByHashSet(arr));
