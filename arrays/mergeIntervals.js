/*

Given a collection of intervals, merge all overlapping intervals.

For example,
Given [1,3],[2,6],[8,10],[15,18],
return [1,6],[8,10],[15,18].

*/


function Interval(start, end) {
  this.start = start;
  this.end = end;
};

const mergeIntervals = (intervals) => {
  // i: array of intervals
  // o: consolidated intervals
  // c: none
  // e: none

  let sorted = intervals.sort((a, b) => {
    if (a.start !== b.start) return a.start - b.start;
    return a.end - b.end;
  });

  const result = [];
  let start;
  let end;

  for (let i = 0; i < sorted.length; i++) {
    if (start === undefined) {
      start = sorted[i].start;
      end = sorted[i].end;
    } else if (sorted[i].start > end) {
      result.push(new Interval(start, end));
      start = sorted[i].start;
      end = sorted[i].end;
    } else {
      end = end > sorted[i].end ? end : sorted[i].end;
    }
  }

  result.push(new Interval(start, end));
  return result;
};

let interval3 = new Interval(1, 3);
let interval2 = new Interval(2, 6);
let interval1 = new Interval(8, 10);
let interval4 = new Interval(15, 18);

let interval5 = new Interval(2, 3);
let interval6 = new Interval(1, 4);


console.log(mergeIntervals([interval1, interval2, interval3, interval4]));
console.log(mergeIntervals([interval6, interval5]));