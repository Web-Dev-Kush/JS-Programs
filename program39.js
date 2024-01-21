// Remove duplicate items in array

function RemoveDuplicate() {
  let arr = ["apple", "mango", "apple", "orange", "mango", "mango"];
  const fruits = arr.filter((item, index) => arr.indexOf(item) === index);
  console.log(fruits);
}

RemoveDuplicate();
