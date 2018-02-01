const moveZerosToEnd = (integers) => {
  let index = 0;

  for (let value of integers) {
    if (value !== 0) integers[index++] = value;
  }

  while (index < integers.length) {
    integers[index++] = 0
  }

  return integers;
}

console.log(moveZerosToEnd([0, 1, 3, 7, 4, 0]));
console.log(moveZerosToEnd([0, 1, 0, 7, 4, 0]));
console.log(moveZerosToEnd([0, 0, 0, 0, 0]));
console.log(moveZerosToEnd([1, 2, 3, 4, 5]));