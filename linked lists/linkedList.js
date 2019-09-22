/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4';
// list.tail.value;   //yields '5';
// list.removeHead(); //yields '5';
// list.removeHead(); //yields 'null';

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToTail() {
    const node = this.newNode(value);
    if (this.head === null) {
      this.tail = this.head = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  removeHead() {
    const output = this.head;
  
    if (this.head !== null) {
      if (this.head.next) {
        this.head = this.head.next;
      } else {
        this.head = this.tail = null;
      }
    }
    return output ? output.value : null;
  }

  contains(value) {
    let node = this.head;
    while (node) {
      if (node.value === value) {
        return true;
      } else {
        node = node.next;
      }
    }
    return false;
  }

  newNode(value) {
    const node = {};
    node.value = value;
    node.next = null;
    return node;
  };
}

var list = new LinkedList();
console.log(list.tail);         //yields 'null'
list.addToTail(4);
list.addToTail(5);
console.log(list.head.value);   //yields '4';
console.log(list.contains(5));  //yields 'true';
console.log(list.contains(6));  //yields 'false';
console.log(list.removeHead()); //yields '4';
console.log(list.tail.value);   //yields '5';
console.log(list.removeHead()); //yields '5';
console.log(list.removeHead()); //yields 'null';

const list1 = new LinkedList();
list1.addToTail(5);
console.log(list1.contains(5)) //true;
console.log(list1.contains(6)) //false;
list1.addToTail(6);
list1.addToTail(7);
list1.addToTail(8);
list1.addToTail(9);
console.log(list1);
console.log(list1.contains(6)) //true;
console.log(list1.removeHead()) //5;
console.log(list1.contains(5)) //false;
console.log(list1.contains(7)) //true;
console.log(list1.contains(8)) //true;
console.log(list1.contains(10)) //false;


