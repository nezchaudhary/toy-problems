const numSquareSum = (n) => {
  let sum = 0;
  while (n !== 0) {
    let digit = n % 10;
    sum += (digit ** 2);
    n = Math.floor(n / 10);;
  }
  return sum;
}

const isHappyNumber = (n) => {
  let set = new Set();
  while (1) {
    n = numSquareSum(n);
    if (n == 1)
      return true;
    if (set.has(n))
      return false;
    set.add(n);
  }
}

console.log(isHappyNumber(19));