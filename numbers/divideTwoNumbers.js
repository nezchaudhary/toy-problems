const divideTwoIntegers = (dividend, divisor) => {
  //handle special cases
  if (divisor == 0) return Number.POSITIVE_INFINITY;
  if (divisor == -1 && dividend == Number.NEGATIVE_INFINITY)
    return Number.POSITIVE_INFINITY;

  //get positive values
  let pDividend = Math.abs(dividend);
  let pDivisor = Math.abs(divisor);

  let result = 0;

  while (pDividend >= pDivisor) {
    //calculate number of left shifts
    let numShift = 0;
    while (pDividend >= (pDivisor << numShift)) {
      numShift++;
    }

    //dividend minus the largest shifted divisor
    result += 1 << (numShift - 1);
    pDividend -= (pDivisor << (numShift - 1));
  }

  if ((dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0)) {
    return result;
  } else {
    return -result;
  }
}

console.log(divideTwoIntegers(30, 3));
