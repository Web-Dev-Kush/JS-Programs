// FibonacciSeries

function fibonacciSeries(number) {
  let n1 = 0;
  let n2 = 1;
  let nextTerm;
  for (i = 0; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
}
fibonacciSeries(10);
