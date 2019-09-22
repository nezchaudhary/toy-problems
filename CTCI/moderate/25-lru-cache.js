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

/**
 * @param {number} capacity
 */
class DoublyLinkedNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null
    this.prev = null;
  }
  
  insert(node) {
    node.next = this.next;
    this.next = node;
    node.prev = this;
    node.next.prev = node;
  }
  
  delete() {
    this.prev.next = this.next;
    this.next.prev = this.prev;
  }
}


class LRUCache {
  constructor(capacity) {
    this.limit = capacity;
    this.size = 0;
    this.head = new DoublyLinkedNode(0, 0);
    this.tail = new DoublyLinkedNode(0, 0);
    this.cache = {};
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(key) {
    const node = this.cache[key];
    if (node) {
      node.delete();
        this.head.insert(node);
      return node.value;
    }
    return -1;
  }

  put(key, value) {
    let node = this.cache[key];
    if (node) {
      node.value = value;
      node.delete();      
    } else {
      node = new DoublyLinkedNode(key, value);
      this.cache[key] = node;
      if (this.size < this.limit) {
      this.size++;
      } else {
        const deleteNode = this.tail.prev;
        delete this.cache[deleteNode.key];
        deleteNode.delete();
      }
    }    
    this.head.insert(node);
  }
}

const actions = ["LRUCache","put","put","get","put","get","put","get","get","get"]
const values = [[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]

let cache = new LRUCache(values[0][0]);
let result;
for (let i = 1; i < actions.length; i++) {
  if (actions[i] === 'put') {
    result = cache.put(...values[i]);
  } else if (actions[i] === 'get') {
    result = cache.get(...values[i]);
  }

  console.log('result for action i - ', i, result); //[null,null,null,1,null,-1,null,-1,3,4]
}


/** 
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/