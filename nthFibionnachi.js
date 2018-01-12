const nthFibonacci = (n) => {
  // let value;

// top down
  // if (memo[n]) return memo[n];
  // if (n <= 1) value = 1;
  // else value = nthFibonacci(n - 1, memo) + nthFibonacci(n - 2, memo);
  // memo[n] = value;
  // return value;

//bottom up
//   if (memo[n]) return memo[n];
//  for (let i = 0; i < n; i++) {
//    if (i <= 2) value = 1;
//    else value = nthFibonacci(i - 1, memo) + nthFibonacci(i - 2, memo);
//    memo[i] = value;
//  }
//  return memo[n];

  // using a while loop with constant space, no recursion
    let lastFib = 1;
    let secondToLastFib = 0;
    let temp;

    while (n > 0) {
      temp = lastFib;
      lastFib = lastFib + secondToLastFib;
      secondToLastFib = temp;
      n--;
    }
    return lastFib;
}

console.log(nthFibonacci(5));