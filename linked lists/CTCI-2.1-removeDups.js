/*
CTCI - 2.1 - Linked List Remove Duplicates
Remove Dups: Write code to remove duplicates from an unsorted linked list.
How would you solve this problem if a temporary buffer is not allowed ?
*/

// Solution uses a hashmap to store visited nodes
// Time Complexity O(n)
// Space Complexity O(n)
const deleteDuplicatesWithBuffer = head => {
  const visited = {};
  let node = head;
  let result = new LinkedListNode(0);
  const root = result;
  while(node !== null) {
    if (visited[node.val]){
      result.next = node.next;
    } else {
      visited[node.val] = true;
      result = node;
    }
    node = node.next;
  }
};

// Time complexity - O(n^2)
// Space Complexity - O(1)
const deleteDuplicatesWithoutBuffer = head => {
  let current = head;
  let runner = head;
  while(current !== null) {
    runner = current;
    while(runner.next !== null) {
      if (runner.next.val === current.val) {
        runner.next = runner.next.next;
      } else {
        runner = runner.next;
      }
    }
    current = current.next;
  }
}
