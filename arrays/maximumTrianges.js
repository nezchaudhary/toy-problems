/*

Given an array of positive integers, return the number of triangles that can formed 
with the three different array elements as three sides of a triangle
For example, if the input arary is [4, 6, 3, 7], the output should be 3. There are three
triangles possible [3, 4, 6], [4, 6, 7] and [3, 6, 7]. Note that [3, 4, 7] is not a possible triangle
Note: For three sides to form a triangle, sum of any 2 sides > 3rd side.

*/

// [3, 4, 6, 7]//

const countTriangles = (nums) => {
  nums.sort((a, b) => b - a);
  let count = 0;
  let b;
  for (let a = 0; a < nums.length - 2; a++) {
    b = a + 1;
    let c = nums.length - 1;
    while (c > b) {
      if (nums[b] + nums[c] > nums[a]) {
        count += (c - b);
        b++;
      } else {
        c--;
      }
    }
  }
  return count;
};

console.log(countTriangles([4, 6, 3, 7]));