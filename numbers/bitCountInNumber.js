const hammingWeight = (n) => {
  let ones = 0;
  while (n != 0) {
    ones = ones + (n & 1);
    n = n >>> 1;
  }
  return ones;
};

console.log(hammingWeight(2147483648));
console.log(hammingWeight(2147483648));
// console.log((2147483648).toString(2));

