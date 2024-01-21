// Find the LCM of two numbers

function LCM(num1, num2) {
  let min = num1 > num2 ? num1 : num2;
  while (true) {
    if (min % num1 == 0 && min % num2 == 0) {
      console.log("The LCM is", min);
      break;
    }
    min++;
  }
}

LCM(12, 16);
