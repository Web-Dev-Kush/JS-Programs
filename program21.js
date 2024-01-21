// Check Prime Number
function CheckPrime(n) {
  let isPrime = true;
  for (i = 2; i < n; i++) {
    if (n % i == 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log("The number is prime");
  } else {
    console.log("The number is not prime");
  }
}

CheckPrime(11);
