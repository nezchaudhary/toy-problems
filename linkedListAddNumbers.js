/*You are given two non-empty linked lists representing two non-negative 
  integers. 

The digits are stored in reverse order and each of their nodes contain 
a single digit.

Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, 
unless the entire number is 0.

*/

// function to create obj node
const createObj = function (value) {
  return {
    val: value,
    next: null
  }
}

const addTwoNumbers = (list1, list2) => {
  // i: 2 linkedlists with values of single digit.
  // o: linked list with return value of sum of digits in reverse order
  // c: none
  // e: if value is 0 for either list. Length of number is different
  /* 
  
  create 2 pointers for each list
  
  since the values are already in reverse order, 
  we can add them as we go.
  
  if the sum is more than 10, we will carry over 1
  
  if the length differs, continue to add the number from the 
  longer list to the output
  
  This will be a linear time operation, O(n)
  */

  let pointer1 = list1;
  let pointer2 = list2;
  let sum = 0;
  let result;
  let node;
  let carryOver = false;
  let currentNode;

  while (pointer1 !== null && pointer2 !== null) {
    // sum values of both lists
    sum = pointer1.val + pointer2.val;

    // check if we had a carry over from previous nodes
    if (carryOver) {
      sum += 1;
      //reset carry over
      carryOver = false;
    }

    //check for carry over again
    carryOver = sum >= 10;

    node = carryOver ? createObj(sum - 10) : createObj(sum);
    sum = 0;

    // add value to result list
    if (!result) {
      result = node;
      currentNode = result;
    } else {
      currentNode.next = node;
      currentNode = currentNode.next;
    }

    // move pointers to next value
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
  }

  // check for any left over nodes
  let leftOverValues = pointer1 === null ? pointer2 : pointer1;

  if (leftOverValues === null && carryOver) {
    currentNode.next = createObj(1);
  } else {
    while (leftOverValues !== null) {
      currentNode.next = carryOver ? createObj(leftOverValues.val + 1) : createObj(leftOverValues.val);
      carryOver = false;
      currentNode = currentNode.next;
      leftOverValues = leftOverValues.next;
    }
  }
  return result;
}

// test values
let num1 = { val: 2, next: { val: 4, next: { val: 3, next: null } } }
let num2 = { val: 5, next: { val: 6, next: { val: 4, next: null } } }

let num3 = { val: 2, next: { val: 4, next: { val: 3, next: null } } }
let num4 = { val: 5, next: { val: 6, next: null } }

let num5 = { val: 2, next: { val: 4, next: null } }
let num6 = { val: 5, next: { val: 6, next: null } }

let num7 = { val: 2, next: { val: 3, next: null } }
let num8 = { val: 5, next: { val: 6, next: { val: 3, next: null } } }


console.log(addTwoNumbers(num1, num2)); // --> { val: 7, next: { val: 0, next: { val: 8, next: null } } }
console.log(addTwoNumbers(num3, num4)); // --> { val: 7, next: { val: 0, next: { val: 4, next: null } } }
console.log(addTwoNumbers(num5, num6)); // --> { val: 7, next: { val: 0, next: { val: 1, next: null } } }
console.log(addTwoNumbers(num7, num8)); // --> { val: 7, next: { val: 9, next: { val: 3, next: null } } }