// Largest Element in Array

function LargestElement(arr) {
  arr.sort();
  console.log("The largest element of array is", arr[arr.length - 1]);
}
LargestElement([1, 5, 2, 8, 3, 9, 4, 6]);
