// /*
//    @param {number[]} prices
//  * @return {number}
//  Say you have an array for which the ith element is the price of a given stock on day i.

// Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

// Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

// Example 1:

// Input: [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
//              Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
// Example 2:

// Input: [1,2,3,4,5]
// Output: 4
// Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
//              Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
//              engaging multiple transactions at the same time. You must sell before buying again.
// Example 3:

// Input: [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e. max profit = 0

//  */
// const maxProfit = prices => {
//   let bought = false;
//   let profitGrid = new Array(prices.length);
//   let maxDifference;
//   let maxProfit = 0;
//   let profit = 0
  
//   for (let i = 0; i < prices.length; i++) {
//       profitGrid[i] = new Array(prices.length).fill(0);
//   }
  
//   for (i = 0; i < prices.length; i++) {
//       for (let j = i + 1; j < prices.length; j++) {
//           maxDifference = prices[j] - prices[i];
//           if (maxDifference > 0) {
//               profitGrid[i][j] = maxDifference; 
//           } else  {
//               profitGrid[i][j] = 0;
//           }
          
//       }
//   }
  
//   for (let i = 0; i < profitGrid.length; i++) {
//     let currentI = i;
//       for (let j = i + 1; j < profitGrid.length; j++) {
//         if (profitGrid[currentI][j] > 0) {
//           if (!bought) {
//             profit += profitGrid[currentI][j];
//             bought = true;
//           } else {
//             currentI += 2;
//             bought = false;
//         }
//       }
//     }

//     if (profit > maxProfit) {
//       maxProfit = profit;
//       profit = 0;
//     }
//   }
  
//   return maxProfit;
//   //create a grid to keep track of profit
//   // ca
//   // we want to find the maximum difference as we go
//   // keep track of the best value or replace with the one we are currently at
//   // you have to keep track of board which will tell you the difference between
  
  
// };

// console.log(maxProfit([7,1,5,3,6,4]));

const maxProfit = prices => {
  // image a graph to plot these values and you want the valley and peak of the graphs
  // ultimately the largest difference wont matter because they will add up

  let i = 0;
  let valley = 0;
  let peak = 0;
  let maxProfit  = 0;

  while (i < prices.length - 1) {
    while (i < prices.length - 1 && prices[i] >= prices[i + 1]) {
      i++;
    }
    valley = prices[i];

    while(i < prices.length - 1 && prices[i] <= prices[i + 1]) {
      i++;
    }
    peak = prices[i];
    maxProfit += peak - valley;
  }
  return maxProfit;
}


console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,1,0,0,2]));