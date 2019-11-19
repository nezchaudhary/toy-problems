/*

CTCI: 10.1 Sorted Merge

You are given two sorted arrays A and B where A has a large enough bugger at the end to hold B. Write a method to merge B into A in sorted order.

*/

const sortedMerge = (a1, a2) => {
  let i1 = a1.length - 1;
  let i2 = a2.length - 1;
  let curr = a1.length - 1;

  while (a1[i1] === undefined) {
    i1--;
  };

  while (i2 >= 0) {
    if (a1[i1] > a2[i2]) {
      a1[curr] = a1[i1];
      i1--; 
    } else {
      a1[curr] = a2[i2];
      i2--;
    }
    curr--;
  }
  return a1;
};

console.log(sortedMerge([2, 3, 4, 6, undefined, undefined, undefined], [1, 4, 6]));


