/*

In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p piece
2p piece
5p piece
10p piece
20p piece
50p piece
£1 (100p)
£2 (200p)

It is possible to make £2 in the following way:

1 * £1 + 1 * 50p + 2 * 20p + 1 * 5p + 1 * 2p + 3 * 1p
How many different ways can £2 be made using any number of coins?

example usage of `makeChange`:

// aka, there's only one way to make 1p. that's with a single 1p piece
makeChange(1) === 1
// aka, there's only two ways to make 2p. that's with two, 1p pieces or with a single 2p piece
makeChange(2) === 2
*/

// dynamic programming solution
const makeChange = function (total) {
//   //i : a total that we ar
//   const possibilities = [1, 2, 5, 10, 20, 50, 100, 200];
//   const answers = new Array(possibilities.length + 1);

//   for (let i = 0; i < answers.length; i++) {
//     answers[i] = new Array(total + 1).fill(0);
//   }

//   for (let p = 0; p < possibilities.length; p++) {
//     let value = possibilities[p];
//     for (let t = 1; t <= total; t++) {
//       let count = 0;
//       let remainder = t % value;
//       if (!remainder) {
//         count++;
//       }

//       if (remainder) {
//         answers[remainder][remainder] > 0 ? count++ : null;
//       }

//       let coins = Math.floor(t / value) - 1;
//         while (coins > 0) {

//         }
//       }
      
//       remain
//     }
//   }
// };

// brute force naive solution
const makeChange = function (total) {
  const coins = [1, 2, 5, 10, 20, 50, 100, 200];
  let count = 0;
  const loop = (coin, value) => {
    if (coin === 0) {
      if (value % coins[coin] === 0) {
        count++;
      }
      return;
    }
    while (value >= 0) {
      loop (coin - 1, value);
        value -= coins[coin];
    }
  }
  loop(coins.length - 1, total);
  return count;
};

console.log(makeChange(1)); // 1
console.log(makeChange(2)); // 2
console.log(makeChange(3)); // 2
console.log(makeChange(4)); // 3
console.log(makeChange(10)); // 11
console.log(makeChange(200)); // 73682

