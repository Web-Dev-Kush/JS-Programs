// is a number perfect square

function perfectSquare(n) {
  let result = Number.isInteger(Math.sqrt(n));
  if (result) {
    console.log("Number is perfect square");
  } else {
    console.log("Number is not a perfect square");
  }
}

perfectSquare(215);
