function LargerNumber(num1, num2, num3) {
  if (num1 > num2) {
    if (num1 > num3) {
      console.log("The first number", num1, "is larger");
    } else {
      console.log("The third number", num3, "is larger");
    }
  } else {
    if (num2 > num3) {
      console.log("The second number", num2, "is larger");
    } else {
      console.log("The third number", num3, "is larger");
    }
  }
}

LargerNumber(43, 61, 83);
