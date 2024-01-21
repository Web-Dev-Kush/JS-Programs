function SecondLargerNumber(a, b, c) {
  if (a > b && a > c) {
    if (b > c) {
      console.log("The second largest number is", b);
    } else {
      console.log("The second largest number is", c);
    }
  } else if (b > a && b > c) {
    if (a > c) {
      console.log("The second largest number is", a);
    } else {
      console.log("The second largest number is", c);
    }
  } else if (a > b) {
    console.log("The second largest number is", a);
  } else {
    console.log("The second largest number is", b);
  }
}

SecondLargerNumber(14, 26, 23);
