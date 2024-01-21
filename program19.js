//Factorial of a number

function Factorial(n) {
  let sum = 1;
  for (i = n; i >= 1; i--) {
    sum = sum * i;
  }
  console.log(sum);
}
Factorial(10);
