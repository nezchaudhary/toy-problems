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



/* 
SOLUTION: Peak Valley Approach


If we analyze the graph, we notice that the points of interest are the consecutive valleys and peaks.

Mathematically speaking: Total Profit= \sum_{i}(height(peak_i)-height(valley_i)) 
TotalProfit=∑i  (height(peaki)−height(valleyi))

The key point is we need to consider every peak immediately following a valley to maximize the profit. In case we skip one of the peaks (trying to obtain more profit), we will end up losing the profit over one of the transactions leading to an overall lesser profit.

For example, in the above case, if we skip peak_ipeak 
i
​	
  and valley_jvalley 
j
​	
  trying to obtain more profit by considering points with more difference in heights, the net profit obtained will always be lesser than the one obtained by including them, since CC will always be lesser than A+BA+B.
*/

const maxProfitPeakValley = prices => {
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

/* SOLUTION: Simple One Pass
This solution follows the logic used in Approach 2 itself, but with only a slight variation. In this case, instead of looking for every peak following a valley, we can simply go on crawling over the slope and keep on adding the profit obtained from every consecutive transaction. In the end,we will be using the peaks and valleys effectively, but we need not track the costs corresponding to the peaks and valleys along with the maximum profit, but we can directly keep on adding the difference between the consecutive numbers of the array if the second number is larger than the first one, and at the total sum we obtain will be the maximum profit. This approach will simplify the solution. This can be made clearer by taking this example:

[1, 7, 2, 3, 6, 7, 6, 7]

The graph corresponding to this array is:
*/
const maxProfitSimpleOnePass = prices => {
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1])
      maxProfit += prices[i] - prices[i - 1];
  }
  return maxProfit;
};


console.log(maxProfitPeakValley([7,1,5,3,6,4]));
console.log(maxProfitSimpleOnePass([7,1,5,3,6,4]));
console.log(maxProfit([7,1,0,0,2]));