
/**
  * implement the function `getClosestCommonAncestor` and `getAncestorPath`
  * in the following Tree class
  */


var Tree = function (value) {
  this.value = value
  this.children = [];
};


Tree.prototype.addChild = function (child) {
  if (!this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new Error('That child is already a child of this tree');
  }
  return this;
};

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function (child) {
  if (this.children.indexOf(child) !== -1) {
    // `child` is an immediate child of this tree
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].isDescendant(child)) {
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

Tree.prototype.getClosestCommonAncestor = function (node1, node2, closest = null) {
  //i: 2 nodes to find the most common ancestor for
  //o: the closest common link between the nodes
  //c: none
  //e: null if no ancestor

  if (node1 === node2) {
    return node1;
  }
  if (this.isDescendant(node1) && this.isDescendant(node2)) {
    closest = this;
  } else {
    return closest;
  }

  if (this.children.length) {
    for (let child of this.children) {
      closest = child.getClosestCommonAncestor(node1, node2, closest);
    }
  }
  return closest;
};

/**
  * return the lowest common ancestor of the two child nodes.
  * (assume for these examples that only a women can be the parent of a child)
  * more examples:
  *  1.) between me and my brother -> my mom
  *  2.) between me and my cousin -> my grandma
  *  3.) between my grandma and my grandma -> my grandma
  *  4.) between me and a potato -> null
  */




//example usage:
var greatGrandma = new Tree('greatGrandMa');
var grandma = new Tree('grandma');
greatGrandma.addChild(grandma);
var mom = new Tree('mom');
grandma.addChild(mom);
var me = new Tree('me');
mom.addChild(me);
var momsSister = new Tree('momSister');
grandma.addChild(momsSister);
var cousin = new Tree('cousin');
momsSister.addChild(cousin);

console.log(greatGrandma.getClosestCommonAncestor(me, cousin)); // grandma;


/**
  * should return the ancestral path of a child to this node.
  * more examples:
  * 1.) greatGrandma.getAncestorPath(me) -> [great grandma, grandma, mom, me]
  * 2.) mom.getAncestorPath(me) -> [mom, me]
  * 3.) me.getAncestorPath(me) -> [me]
  * 4.) grandma.getAncestorPath(H R Giger) -> null
  */
Tree.prototype.getAncestorPath = function (node, result) {
  if (!result) {
    result = [];
    let isRelative = this.isDescendant(node);
    if (isRelative) {
      result.push(this);
    } else {
      return null;
    }
  }
  this.children.forEach(child => {
    if (child === node || child.isDescendant(node)) {
      result.push(child);
      child.getAncestorPath(node, result);
    }
  });
  return result;
};

console.log(grandma.getAncestorPath(me)); // => [grandma, mom, me]

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function (child) {
  var index = this.children.indexOf(child);
  if (index !== -1) {
    // remove the child
    this.children.splice(index, 1);
  } else {
    throw new Error('That node is not an immediate child of this tree');
  }
};
