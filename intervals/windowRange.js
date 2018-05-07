const prices = [188930, 194123, 201345, 154243, 154243]; 
const prices2 = [154240, 194123, 154243, 188930, 194125, 201345, 188930, 194123, 201345, 194125];
const fs = require('fs');


// // helper function to add sub-ranges
// const updateCounts = (counts, start, end, type) => {
//   while (start < end - 1) {
//     let value = (end - start) - 1;
//     counts[start] = type === '+' ? value : -value;
//     start++;
//   };
// }

// // helper function to sum sub-range count for given window
// const calculateRangeWindows = (ranges) => {
//   let result = 0;
//   for (let index in ranges) {
//     result += ranges[index];
//   }
//   return result;
// };


// // helper function to check if the given range for increasing or decreasing values
// const findConsecutiveRanges = (prices, start, end) => {

//   // check if they are equal and return null right away
//   if (prices[start] === prices[start + 1]) return null;

//   // check if it will be an increasing or decreasing range;
//   let increasing = prices[start] < prices[start + 1];  

//   // count for increases
//   if (increasing) {
//     while(prices[start] < prices[start + 1] && start < end - 1) {
//       start++;
//     }
//     return [start + 1, '+'];
//     //else it is decreasing
//   } else {
//     while (prices[start] > prices[start + 1] && start < end - 1) {
//       start++;
//     }
//     return [start + 1, '-'];
//   }
// }

// const calculateRanges = (prices, daysWindow) => {
//   let subRangeCounts = {};
//   let startRange = 0;
//   let endRange = startRange + daysWindow;
//   const result = [];
//   let current = 0;

//   while (endRange <= prices.length) {
//     while (current < endRange) {
//       const currentRanges = findConsecutiveRanges(prices, current, endRange);
//       if (currentRanges) {
//         updateCounts(subRangeCounts, current, currentRanges[0], currentRanges[1]);
//         current += (currentRanges[0] === endRange) ? (endRange - startRange) : 1;
//       }
//     }
//     result.push(calculateRangeWindows(subRangeCounts));
//     delete subRangeCounts[startRange];
//     startRange++;
//     endRange++;
//     current = startRange;
//   }
//   return result.join(' ');
// };

/* A solution that uses brute force would have to repeatedly loop through a window,
becoming less efficient as the input grows in size. By keeping track of
the consecutive increasing and decreasing values and using them to calculate the total
number of increasing and decreasing subranges, there is no need to loop repeatedly. Doing so
cuts down on the number of operations needed and improves speed. */
// let text = loadStrings('input.txt');

const subRangeDifferences = (start, end, data) => {
  let decrease = 0;
  let increase = 0;
  let decreaseConsecutive = 0;
  let increaseConsecutive = 0;

  for (var i = start + 1; i < end; i++) {
    var curr = data[i];
    if (i === 0) {
      continue;
    }
    let prev = data[i - 1];

    if (curr > prev) {
      if (increaseConsecutive === 0) {
        increaseConsecutive = 1;
      } else {
        increaseConsecutive += 1;
      }
      decreaseConsecutive = 0;
      increase += increaseConsecutive;
    } else if (curr < prev) {
      if (decreaseConsecutive === 0) {
        decreaseConsecutive = 1;
      } else {
        decreaseConsecutive += 1;
      }
      increaseConsecutive = 0;
      decrease += decreaseConsecutive;
    }
  }
  return increase - decrease;
};

const calculateRanges = (data, window_size) => {
  let result = [];
  //10
  //6
  //4

  let x;
  for (let day = 0; day < (data.length - (window_size - 1)); day++) {
    result.push(subRangeDifferences(day, day + window_size, data));
    x = day;
  }
  return result.join(' ');
};

const fileData = fs.readFileSync('input200000.txt').toString();
const parsed = fileData.split('\n').map(value => value.split(' '));
const data = parsed[1];
data.pop();
const windowTime = parsed[0][1];

calculateRanges(data, 50);
