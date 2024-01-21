//Simple Interest

function SimpleInterest(principal, rate, time) {
  let interest = (principal * rate * time) / 100;
  console.log("The simple interest is", interest);
}

SimpleInterest(2000, 10, 3);
