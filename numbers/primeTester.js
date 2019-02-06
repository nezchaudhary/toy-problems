/**
 * A prime number is a whole number that has no other divisors other than
 * itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

var primeTester = function (n) {
  if (typeof n !== 'number' || n <= 1 || n % 1 !== 0) {
    // n isn't a number or n is less than 1 or n is not an integer
    return false;
  } else {
    let i = 2;

    while (n % i !== 0) {
      i++;
    }

    return i === n;
  }
  // TODO: return true if n is prime, false otherwise
};

/* Extra credit: Write a function that generates a list of all prime numbers
 * in a user-specified range (inclusive). If you're not quite sure where to start,
 * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
 * saucy, check out the Sieve of Atkin.)
 */

// var primeSieve = function (start, end) {
//   let primes = [];
//   if (start < 3){
//     primes.push(2);
//     start = 3;
//   }

//   for (let i = start; i <= end; i++) {
//     let num = 2;
//     while (i % num !== 0) {
//       num++
//     }

//     if (num === i) {
//       primes.push(i);
//     }
//   }

//   return primes;

// };

var primeSieve = function (start, end) {
  const primes = [];
  const composites = [];
  for (let i = 2; i <= end; i++) {
    for (let j = i; i * j <= end; j++) {
      composites[i * j] = false;
    }
  }

  for (let k = start; k <= end; k++) {
    if (composites[k] !== false) {
      primes.push(k);
    }
  }
  return primes;

  // let current = start > 2 ? start : 2;
  // let composites = [];;

  // for (current = start; current <= end; current++) {



  //   if (primeTester(current)) {
  //     for (let i = 2; i <= Math.sqrt(end); i++) {
  //       composites[i * i] = false;
  //     }
  //   }
  // }

  // let primes = [];

  // for (let i = start; i <= end; i++) {
  //   if (composites[i]) primes.push(i);
  // }
  // return primes;
}

// console.log(primeTester(2)); //true
// console.log(primeTester(17)); //true
// console.log(primeTester(6)); //false
// console.log(primeTester(5)); // true
// console.log(primeTester(4)); //false
console.log(primeSieve(5, 23)) // [5, 7, 11, 13, 17, 19, 23];
console.log(primeSieve(2, 10)) // [2, 3, 5, 7]


