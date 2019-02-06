/*

You are given a binary tree in which each node contains an integer value.

Find the number of paths that sum to a given value.

The path does not need to start or end at the root or a leaf, but it must go downwards (traveling only from parent nodes to child nodes).

The tree has no more than 1,000 nodes and the values are in the range -1,000,000 to 1,000,000.


Example:

root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8

      10
     /  \
    5   -3
   / \    \
  3   2   11
 / \   \
3  -2   1

Return 3. The paths that sum to 8 are:

1.  5 -> 3
2.  5 -> 2 -> 1
3. -3 -> 11

*/


const pathSum = (root, sum, total = 0, count = 0, sumMap = { 0: 1 }) => {
  if (!root) return 0;

  total += root.val;

  if (sumMap[total - sum]) {
    count += sumMap[total - sum];
  }
  sumMap[total] ? sumMap[total] += 1 : sumMap[total] = 1;

  if (root.left) {
    count = pathSum(root.left, sum, total, count, sumMap);
  }

  if (root.right) {
    count = pathSum(root.right, sum, total, count, sumMap);
  }

  sumMap[total] ? sumMap[total] -= 1 : null;
  return count;
};
/*
      10
     /  \
    5   -3
   / \    \
  3   2   11
 / \   \
3  -2   1


*/


const tree = {
  val: 10,
  left: {
    val: 5,
    left: {
      val: 3,
      left: {
        val: 3,
        left: null,
        right: null,
      },
      right: {
        val: -2,
        left: null,
        right: null,
      }
    },
    right: {
      val: 2,
      left: null,
      right: {
        val: 1,
        left: null,
        right: null
      }
    },
  },
  right: {
    val: -3,
    right: {
      val: 11,
      left: null,
      right: null
    },
    left: null, 
  }
}

console.log(pathSum(tree, 8));