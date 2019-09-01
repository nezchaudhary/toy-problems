/*
  Create a key-value cache of a given item capacity.
  Use insertion at front of doubly-linked-list to maintain ascending order of recent-use.
  Upon insertion, least-recently-used item is evicted from the tail of the list.
  Big O: O(logn)
  Note: intend to use a "sentinel" head and tail on either end of the actual item-nodes.
  Steps
    1.  new cache of size 2
    2.  set A, list: A
    3.  set B, list: B -> A
    4.  get A, return A, list: A -> B
    5.  set C, over capacity / evict, list: C -> A
    6.  get B = return null
    7.  set D = over capacity / evict, list: D -> C
    8.  get A = return null
    9.  get C = return C, list: D -> C
    10. get D = return D


  class DoublyLinkedList {
    // attrs: key, value, prev, next
    linkToNext(nextNode) {
    }
    delete() {
      // delete self
    }
    insert(node) {
      // insert node after self
      // this is used to swap next and the real head (not the sentinel-head)
    }
  }
  class LRUCache {
    constructor(capacity) {
      this.capacity = capacity;
      this.cache = {};
      // set head and tail to new doubly linked list
      this.count = 0;
    }
    get(key) {
      // return value for key, if found
    }
    set(key, value) {
      // if key found in cache return value
      // else insert new key value pair
      // trigger capacity management (eviction if necessary)
    }
    manageCapacity() {
      // track the item count
      // process eviction if necessary
    }
    cacheReturnNode(node) {
      // move node up in the list and return it
    }
  }
 

*/

class DoublyLinkedList {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }

  linkToNext(nextNode) {
    this.next = nextNode;
    nextNode.prev = this;
  }

  delete() {
    if (this.prev !== null) this.prev.next = this.next;
    if (this.next !== null) this.next.prev = this.prev;
  }

  insert(node) {
    node.next = this;
    this.prev = node;
  }

}

class LRUCache {
  constructor(props) {
    const { capacity } = props;
    this.capacity = capacity;
    this.cache = {};
    this.head = new DoublyLinkedList(0, 0);
    this.tail = this.head;
    this.count = 0;
  }

  get (key) {
    let output = null;
    if (this.cache[key]) {
      output = this.cache[key];
      this.resetPosition(this.cache[key]);
    }
    return output;
  }

  set(key, value) {
    if (this.cache[key]) {
      this.resetPosition(this.cache[key]);
    } else {
      this.manageCapacity();
      this.head.insert(new DoublyLinkedList(key, value));
      if (this.head === this.tail) {
        this.tail = this.head.next;
      }
    }
  }

  resetPosition(node) {
    node.delete();
    if (node === this.tail) this.tail = node.prev;
    if (node === this.head) this.head = node.next;
    this.head.insert(node);
  }

  manageCapacity() {
    if (this.count < this.capacity) {
      this.count++;
    } else {
      this.tail.prev.next = null;
      this.tail = this.tail.prev;
      this.tail.delete();
    }
  }
}

const cache = new LRUCache(3);
const numbers = [4, 3, 1, 0, 4, 0, 2, 0, 1];
for (let i = 0; i < numbers.length; i++) {
  cache.set(numbers[i], i);
}