function BST(value) {
  this.value = value;
  this.left = this.right = null;
};

BST.prototype.insert = function (value) {
  if (value < this.value) {
    this.left = this.left ? this.left.insert(value) : new BST(value);
  } else {
    this.right = this.right ? this.right.insert(value) : new BST(value);
  }
  return this;
}

const isBinarySearchTree = (tree) => {

  // if value is null
  if (tree.left === null && tree.right === null) {
    return true;
  }

  if (tree.left) {
    if (!(tree.left.value < tree.value)) return false;
    if (!isBinarySearchTree(tree.left)) return false;
  }

  if (tree.right) {
    if (!(tree.right.value > tree.value)) return false;
    if (!isBinarySearchTree(tree.right)) return false;
  }
  return true;
}

let tree1 = new BST(10);
tree1.insert(5);
tree1.insert(13);
tree1.insert(3);
tree1.insert(15);
// console.log('tree', tree1);
console.log('tree1', isBinarySearchTree(tree1));

//not a BST on left
let tree2 = new BST(15);
let node1 = new BST(10);
let node2 = new BST(8);
let node3 = new BST(11);
let node4 = new BST(9);
let node5 = new BST(14);
tree2.left = node1;
node1.left = node2;
node2.left = node4;
node1.right = node3;
node3.left = node5;
// console.log('tree2', tree2);
console.log('tree2', isBinarySearchTree(tree2));





