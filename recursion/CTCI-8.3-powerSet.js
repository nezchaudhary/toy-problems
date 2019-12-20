/*
CTCI: 8.3 Power Set - Write a method to return all subsets of a set

// Solve it for 0 case first, then 1, then 2. for 3, use the result of 2 and add to it. Basically apply that from 0

p (0) = {}
P(1) = {}, {1}
P(2) = {}, {1}, {2}, {1, 2}
P(3) = P(3) - P(2) = {3}, {1, 3}, {2, 3}, {1, 2, 3}
*/

// Time Complexity O(2 ^n)
const getSubsets = (set, index) => {
  let allSubsets;
  if (set.length === index) {
    allSubsets = [];
    allSubsets.push([]);
  } else {
    allSubsets = getSubsets(set, index + 1);
    const item = set[index];
    const moreSubsets = [];
    for (let curr = 0; curr < allSubsets.length; curr++) {
      const newSubset = [];
      newSubset.push(...subSet);
      newSubset.push(item);
      moreSubsets.push(newSubset);
    }

    allSubsets.push(...moreSubsets);
  }
  return allSubsets;
}


 