/*
Merge Intervals
Solution
Given a collection of intervals, merge all overlapping intervals.

Example 1:

Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
Example 2:

Input: [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.

*/


const mergeIntervals = intervals => {
  if (!intervals || !intervals.length) return [];
  if (intervals.length === 1) return intervals;
  const sortedByStart = intervals.sort((a, b) => a[0] - b[0]);
  const result = [intervals[0]];
  let j = 0;
  
  for (let i = 1; i < sortedByStart.length; i++) {
    if (sortedByStart[i][0] <= result[j][1]) {
      result[j][1] = Math.max(result[j][1], sortedByStart[i][1]); 
    } else {
      result.push(sortedByStart[i]);
      j++;
    }
  }
  return result;
};


console.log(mergeIntervals([[1,4],[4,5]])); //[[1,5]]
console.log(mergeIntervals([[1,3],[2,6],[8,10],[15,18]])); // [[1,6],[8,10],[15,18]]