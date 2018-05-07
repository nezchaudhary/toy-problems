const lowestCommonAncestor = (root, p, q) => {
  if (root === null) {
    return root;
  }

  if (root.val > p.val && root.val > q.val) {
    return lowestCommonAncestor(root.left, p, q);
  } else if (root.val < p.val && root.val < q.val) {
    return lowestCommonAncestor(root.right, p, q);
  };
  return root;
};

const bst = {
  val: 6,
  left: {
    val:4,
    left: null,
    right: null
  },
  right:{
    val:8,
    left:null,
    right: null
  }
}
console.log(lowestCommonAncestor(bst, bst, {val: 5, left: null, right: null}));