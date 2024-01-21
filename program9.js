function AddNumbers() {
  let arr = [12, 13, 14, 15, 16];
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log("The sum of numbers is: ", sum);
}

AddNumbers();
