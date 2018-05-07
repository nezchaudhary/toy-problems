/*

Given an array of meeting time intervals consisting of start and end times[[s1, e1], [s2, e2],...](si < ei), find the minimum number of conference rooms required.

For example,
  Given[[0, 30], [5, 10], [15, 20]],
return 2.

 * @param { Interval[] } intervals
  * @return { number }
  * 
*/
const minMeetingRooms = (intervals) => {
  let start = [];
  let end = [];

  for (let i = 0; i < intervals.length; i++) {
    start[i] = intervals[i][0];
    end[i] = intervals[i][1];
  }

  start.sort((a, b) => a - b);
  end.sort((a, b) => a - b);

  let rooms = 0;
  let endIndex = 0;

  for (let i = 0; i < intervals.length; i++) {
    if (start[i] < end[endIndex]) {
      rooms++;
    } else {
      endIndex++;
    }
  }
  return rooms;
};


const intervals = [[0, 30], [5, 10], [15, 20]]; // 2
const intervals2 = [[0, 35], [10, 20], [10, 15], [15, 30], [20, 30], [25, 40],[5, 10]]; // 4
console.log(minMeetingRooms(intervals));
console.log(minMeetingRooms(intervals2));
console.log(minMeetingRooms([[2, 15], [36, 45], [9, 29], [16, 23], [4, 9]]));// 