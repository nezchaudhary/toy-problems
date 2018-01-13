/* Given a Knapsack of a maximum capacity of W and N items each with its own value 
and weight, throw in items inside the Knapsack such that the final contents has the maximum 
value
*/

// Dynamic Programming Solution
var knapsack = (weight, items) => {
  let maxValue = 0;
  let remainingWeight = weight;
  let valueTable = new Array(items.length + 1);

  for (let i = 0; i < valueTable.length; i++) {
    valueTable[i] = new Array(weight + 1).fill(0);
  }

  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    for (let w = 1; w <= weight; w++) {
      let prevRowValue = valueTable[i][w];
      if (item.w <= w) {
        valueTable[i + 1][w] = Math.max(valueTable[i][w - item.w] + item.v, prevRowValue)
      } else {
        valueTable[i + 1][w] = prevRowValue;
      }
    }
  }
  return valueTable[items.length][weight];
}

//Exponential time solution
// var knapsack = function (weight, items) {
//   let maxValue = 0;
//   let start = 0;
//   let remainingWeight = weight;

//   const loop = (i, value = 0) => {
//     if (maxValue < value) {
//       maxValue = value;
//     }
//     for (i; i < items.length; i++) {
//       let item = items[i];
//       if (item.w <= remainingWeight) {
//         value += item.v;
//         remainingWeight -= item.w;
//         loop(i + 1, value);

//         value -= item.v;
//         remainingWeight += item.w;
//       } else if (remainingWeight > 0) {
//         continue;
//       }
//     }
//   }
//   loop(start);
//   return maxValue;
// };

let items1 = [{ w: 3, v: 10 }, { w: 2, v: 6 }, { w: 4, v: 11 }]; //max weight 7
let items2 = [{ w: 12, v: 4 }, { w: 2, v: 2 }, { w: 1, v: 1 }, { w: 1, v: 2 }, { w: 4, v: 10 }]; //// max weight 15
let items3 = [{ w: 5, v: 10 }, { w: 4, v: 40 }, { w: 6, v: 30 }, { w: 3, v: 50 }]; // max weight 10

console.log(knapsack(7, items1));
console.log(knapsack(15, items2));
console.log(knapsack(10, items3));