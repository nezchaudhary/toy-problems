const moveZerosToEnd = (integers) => {
  let index = 0;
  let zeros = 0;

  for (let value of integers) {
    if (value !== 0) integers[index++] = value;
    if (value === 0) zeros++;
  }

  while (index < integers.length && zeros) {
    integers[index++] = 0;
    zeros--;
  };

  return integers;
}

console.log(moveZerosToEnd([0, 1, 3, 7, 4, 0]));
console.log(moveZerosToEnd([0, 1, 0, 7, 4, 0]));
console.log(moveZerosToEnd([0, 0, 0, 0, 0]));
console.log(moveZerosToEnd([1, 2, 3, 4, 5]));