/*

Insert Interval

Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).

You may assume that the intervals were initially sorted according to their start times.

Example 1:

Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]
Example 2:

Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.

*/

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */

// Time Complexity - O(n) since we pass once along the input
// Space Complexity - O (n) - for output
const insertInterval = (intervals, newInterval) => {
  // init data
  const [newStart, newEnd] = newInterval;
  let i = 0; 
  const n = intervals.length;
  const output = [];

  // add all intervals starting before newInterval
  while (i < n && newStart > intervals[i][0]) {
    output.push(intervals[i]);
    i++;
  }

  // if there is no overlap, just add the interval
  if (output.length === 0 || output[output.length - 1][1] < newStart)
    output.push(newInterval);
  // if there is an overlap, merge with the last interval
  else {
    const interval = output.pop();
    interval[1] = Math.max(interval[1], newEnd);
    output.push(interval);
  }

  // add next intervals, merge with newInterval if needed
  while (i < n) {
    const interval = intervals[i];
    i++;
    const [start, end] = interval;
    // if there is no overlap, just add an interval
    if (output[output.length - 1][1] < start) output.push(interval);
    // if there is an overlap, merge with the last interval
    else {
      const interval = output.pop();
      interval[1] = Math.max(interval[1], end);
      output.push(interval);
    }
  }
  return output;
}


console.log('Insert Interval', insertInterval([[1,3],[6,9]], [2,5]));
console.log('Insert Interval', insertInterval([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]));
console.log('Insert Interval', insertInterval([[1,5]], [0,0]));
