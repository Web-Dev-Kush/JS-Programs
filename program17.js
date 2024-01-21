function NumberTriangle(n) {
  let string = "";
  for (let i = 1; i <= n; i++) {
    for (let k = 1; k < i; k++) {
      string += k;
    }
    string += "\n";
  }
  console.log(string);
}
NumberTriangle(10);
