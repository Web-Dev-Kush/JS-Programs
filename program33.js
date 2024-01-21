// HCF of two numbers

function myFunction(a, b) {
  let smaller = Math.min(a, b);
  let hcf = 1;

  for (let i = 1; i <= smaller; i++) {
    if (a % i === 0 && b % i === 0) {
      hcf = i;
    }
  }
  return hcf;
}

console.log("HCF of the giving numbers is:", myFunction(25, 125));
