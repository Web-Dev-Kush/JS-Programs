function AddDigits(n) {
  let sum = 0;
  let rem = 0;
  while (n) {
    rem = n % 10;
    sum += rem;
    n = Math.floor(n / 10);
  }
  console.log("The sum of digits is", sum);
}

AddDigits(32456);
