function ListNode(x) {
  this.value = x;
  this.next = null;
}

const removeKFromLinkedList = (list, k) => {
  if (list === null) {
    return null;
  }
  if (list.value === k) {
    if (list.next) {
      list = removeKFromLinkedList(list.next, k);
    } else {
      return null;
    }
  } else {
    list.next = removeKFromLinkedList(list.next, k);
  }
  return list;

  // if (l === null) return null;
  // else {
  //   l.next = removeKFromList(l.next, k);
  //   return (l.value === k) ? l.next : l
  // }
}

let node1 = new ListNode(3);
let node2 = new ListNode(1);
let node3 = new ListNode(2);
let node4 = new ListNode(3);
let node5 = new ListNode(4);
let node6 = new ListNode(5);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;

console.log(removeKFromLinkedList(node1, 3)); // [1, 2, 4, 5];

let node7 = new ListNode(1000);
let node8 = new ListNode(1000);
node7.next = node8;
console.log(removeKFromLinkedList(node7, 1000)); // null

let node9 = new ListNode(7);
console.log(removeKFromLinkedList(node9, 7)); // null
console.log(removeKFromLinkedList(null, 5)); // null

let node10= new ListNode(7);
let node11 = new ListNode(1);
let node12= new ListNode(7);
node10.next = node11;
node11.next = node12;
console.log(removeKFromLinkedList(node10, 7)) // 1
