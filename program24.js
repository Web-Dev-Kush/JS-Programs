function LargestNumberinArray() {
  let age = [12, 23, 44, 11, 22, 66, 32, 55, 98, 29];
  let result = age.sort();
  console.log("The largest number is", result[result.length - 1]);
}

LargestNumberinArray();
