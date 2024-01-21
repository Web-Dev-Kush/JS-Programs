function Armstrong(num) {
  let sum = 0;
  let range = num.length;
  let temp = num;
  while (temp > 0) {
    let rem = temp % 10;
    sum += rem ** range;
    temp = parseInt(temp / 10);
  }
  if (sum == num) {
    console.log("The number is a Armstrong number");
  } else {
    console.log("The number is not an Armstrong Number");
  }
}

Armstrong(153);
