const reverseInteger = (num) => {
  let negative = num < 10;
  num = negative ? -num : num;
  let prev = 0;
  let reverse = 0;
  let current;

  while (num !== 0) {
    let current = num % 10;
    reverse = (reverse * 10) + current;

    if (((reverse - current) / 10) !== prev) {
      return 0;
    }
    prev = reverse;
    num = Math.floor(num / 10) ;
  }
  return negative ? -reverse : reverse;
}
console.log(reverseInteger(54321));
console.log(reverseInteger(1000000045));