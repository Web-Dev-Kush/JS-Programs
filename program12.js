function SwapNumbers(a, b) {
  let arr = [a, b];
  let num1 = arr[0];
  let num2 = arr[1];
  console.log("The original numbers are", num1, num2);
  num1 = b;
  num2 = a;
  console.log("After swaping numbers are", num1, num2);
}

SwapNumbers(12, 13);
