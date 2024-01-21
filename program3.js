function EvenOdd(num) {
  if (num == 0) {
    console.log("The value is 0.");
  } else if (num > 0) {
    if (num % 2 == 0) {
      console.log("The number is even");
    } else {
      console.log("The number is odd");
    }
  }
}

EvenOdd(100);
