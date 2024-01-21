// Finding Largest and Smallest Element in Array

function LargestSmallest() {
  let age = [12,32, 55, 21, 77, 29];
  age.sort();
  console.log("The largest element of array is", age[age.length - 1]);
  console.log("The smallest element of array is", age[0]);
}
LargestSmallest();
