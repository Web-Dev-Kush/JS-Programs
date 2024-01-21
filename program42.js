//Conversion between Number System -> Decimal to binary, binary to decimal

function DecimalToBinary(number) {
  console.log((number >>> 0).toString(2));
}

function BinaryToDecimal(binary) {
  var digit = parseInt(binary, 2);
  console.log(digit);
}

DecimalToBinary(34);
BinaryToDecimal("1011010");
