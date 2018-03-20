class BST {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      this.left = this.left ? this.left.insert(value) : new BST(value);
    } else {
      this.right = this.right ? this.right.insert(value) : new BST(value);
    }
    return this;
  }
}

const verticalOrder = (root, width, result = []/*, size = {width:0}*/) => {
  // if (root === undefined) return result;
  // if (root === null) return;
  // if (size.width > 0) size.width--;
  // verticalOrder(root.left, result, size);
  // if (result.length !== 0) width.width++; 
  // if (result[size.width] === undefined) result[size.width] = [];
  // result[size.width].push(root.value);
  // size.width++;
  // verticalOrder(root.right, result, size);
  // size.width--;
  // return result;

  const getWidth = (root) => {
    if (root.left === null & root.right === null) return 0;
    return 1 + getWidth(root.left);
  }
  
  if (width === undefined) width = getWidth(root);


  if (root === undefined) return result;
  // console.log('root', root);
  // console.log('width', width);
  if (root === null) return;
  // result[width] = [root.val];
  if (result[width] === undefined) result[width] = [];
  result[width].push(root.value);
  verticalOrder(root.left, width - 1, result);
  verticalOrder(root.right, width + 1, result);
  return result;
};

const tree = new BST(18);
tree.insert(16);
tree.insert(22);
tree.insert(17);
tree.insert(15);
tree.insert(19);
tree.insert(20);
tree.insert(24);
tree.insert(14);
tree.insert(13);
tree.insert(23);
tree.insert(15.5);

console.log('answer', verticalOrder(tree));
