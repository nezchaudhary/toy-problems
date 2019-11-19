/*
In a row of seats, 1 represents a person sitting in that seat, and 0 represents that the seat is empty. 

There is at least one empty seat, and at least one person sitting.

Alex wants to sit in the seat such that the distance between him and the closest person to him is maximized. 

Return that maximum distance to closest person.

Example 1:

Input: [1,0,0,0,1,0,1]
Output: 2
Explanation: 
If Alex sits in the second open seat (seats[2]), then the closest person has distance 2.
If Alex sits in any other open seat, the closest person has distance 1.
Thus, the maximum distance to the closest person is 2.
Example 2:

Input: [1,0,0,0]
Output: 3
Explanation: 
If Alex sits in the last seat, the closest person is 3 seats away.
This is the maximum distance possible, so the answer is 3.
Note:

1 <= seats.length <= 20000
seats contains only 0s or 1s, at least one 0, and at least one 1.
*/

// Time Complexity: O(N), where N is the length of seats.
// Space Complexity: O(N), the space used by left and right.
const maxDistToClosest = seats => {
  const N = seats.length;
  const left = new Array(N).fill(N)
  const right = new Array(N).fill(N);

  for (let i = 0; i < N; i++) {
    if (seats[i] === 1) left[i] = 0;
    else if (i > 0) left[i] = left[i - 1] + 1;
  }

  for (let i = N-1; i >= 0; i--) {
    if (seats[i] === 1) right[i] = 0;
    else if (i < N - 1) right[i] = right[i + 1] + 1;
  }

  let ans = 0;
  for (let i = 0; i < N; i++)
    if (seats[i] === 0) {
      ans = Math.max(ans, Math.min(left[i], right[i]));
    }

  return ans;
};

console.log(maxDistToClosest([1,0,0,0,1,0,1])) // 2