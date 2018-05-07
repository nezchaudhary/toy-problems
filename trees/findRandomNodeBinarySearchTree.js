class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.size = 1;
  }

  insert(value) {
    if (value <= this.value) {
      this.left = this.left ? this.left.insert(value) : new BST(value);
    } else {
      this.right = this.right ? this.right.insert(value) : new BST(value);
    }
    this.size++;
    return this;
  }

  getIthNode(i) {
    let leftSize = this.left ? this.left.size : 0 ;
    if (i < leftSize) {
      return this.left.getIthNode(i);
    } else if (i === leftSize) {
      return this;
    } else {
      return this.right ? this.right.getIthNode(i - (leftSize + 1)) : null;
    }
  }

  find(value) {
    if (value === this.value) {
      return this;
    } else if (value <= this.value) {
      return this.left ? this.left.find(value) : null;
    } else {
      return this.right ? this.right.find(value) : null;
    }
    return null;
  }

  getRandomNode() {
    let random = Math.floor(Math.random() * (this.size));
    return this.getIthNode(random);
  }
}

const bst = new BST(10);
bst.insert(5);
bst.insert(2);
bst.insert(15);
bst.insert(7);
bst.insert(12);
// console.log('bst', bst);

console.log('bst random 0', bst.getRandomNode());
console.log('bst random 1', bst.getRandomNode());
console.log('bst random 2', bst.getRandomNode());
console.log('bst random 3', bst.getRandomNode());
console.log('bst random 4', bst.getRandomNode());
console.log('bst random 5', bst.getRandomNode());
console.log('bst random 6', bst.getRandomNode());