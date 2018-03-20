const multiply = (base, exponent) => {
  let count = 0;
  let remainder = exponent;
  let result = base;

  while (remainder > 1) {
    remainder = Math.floor(remainder / base);
    count++;
  }

  while (count) {
    result *= result;
    count--;
  }

  if (exponent % 2 !== 0) {
    result *= base;
  }

  return result;
}

console.log(multiply(2, 4));
console.log(multiply(2, 8));
console.log(multiply(2, 5));
console.log(multiply(3, 3));
console.log(multiply(3, 2));

