function alphabetTriangle(n) {
  let string = "";
  for (let i = 1; i <= n; i++) {
    for (let k = 0; k < i - 1; k++) {
      string += String.fromCharCode(k + 65);
    }
    string += "\n";
  }
  console.log(string);
}
alphabetTriangle(26);
