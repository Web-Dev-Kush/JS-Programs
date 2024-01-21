const add = (num1, num2) => {
  return num1 + num2;
};
const diff = (num1, num2) => {
  if (num1 > num2) {
    return num1 - num2;
  } else {
    return num2 - num1;
  }
};
const product = (num1, num2) => {
  return num1 * num2;
};
const division = (num1, num2) => {
  if (num1 > num2) {
    return Math.floor(num1 / num2);
  } else {
    return Math.floor(num2 / num1);
  }
};

console.log("The sum is", add(2, 3));
console.log("The subtraction is", diff(12, 23));
console.log("The product is", product(23, 12));
console.log("The division is", division(34, 17));
