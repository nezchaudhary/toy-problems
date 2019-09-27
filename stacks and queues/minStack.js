/*

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.
 

Example:

MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> Returns -3.
minStack.pop();
minStack.top();      --> Returns 0.
minStack.getMin();   --> Returns -2.

*/

// Time Complexity - O(1)
// Space Complexity O(n)
class MinStackNSpace {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(value) {
    const min = this.getMin();
    if (min === null || value <= this.getMin()) {
      this.minStack.push(value);
    }
    this.stack.push(value);
  }

  pop() {
    const value = this.stack.pop();
    if (value === this.getMin()) {
      this.minStack.pop();
    }
    return value;
  }

  getMin() {
    if (this.minStack.length === 0) {
      return null;
    } 
    return this.minStack[this.minStack.length - 1];
  }

  top() {
    if (this.stack.length === 0) {
      return null;
    } else {
      return this.stack[this.stack.length - 1];
    }
  }
}

// Time Complexity - O(1)
// Space Complexity O(1)
class MinStack1Space {
  constructor() {
    this.stack = [];
    this.minValue = null;
  }

  push(value) {
    if (this.stack.length === 0) {
      this.stack.push(value);
      this.minValue = value;
    } else if (value < this.minValue) {
      this.stack.push(2*value - this.minValue);
      this.minValue = value;
    } else {
      this.stack.push(value);
    }
  }

  pop() {
    if (this.stack.length > 0) {
      const value = this.stack.pop();
      if (value < this.minValue) {
        this.minValue = 2 * this.minValue - value;
        return value;
      } else {
        return value;
      }
    }
    this.minValue = null;
    return null;
  }

  getMin() {
    return this.minValue;
  }

  top() {
    if (this.stack.length > 0) {
      const value = this.stack[this.stack.length - 1];
      if (value < this.minValue) {
        return this.minValue;
      }
      return value;
    }
    return null;
  }
}
const minStack1 = new MinStack();
// const actions = ["push","push","push","push","getMin","pop","getMin","pop","getMin","pop","getMin"]
// const values = [[2],[0],[3],[0],[],[],[],[],[],[],[]];
const actions = ["push","push","push","getMin","pop","getMin"]
const values = [[0],[1],[0],[],[],[]]

for (let i = 0; i < actions.length; i++) {
  if (actions[i] === 'push') {
    console.log(`${i} - push - ${ minStack1.push(values[i][0])}`);
  } else if (actions[i] === 'getMin') {
    console.log(`${i} - getMin - ${minStack1.getMin()}`);
  } else if (actions[i] === 'pop') {
    console.log(`${i} - pop - ${minStack1.pop()}`)
  }
  console.log('stack', minStack1.stack, 'minStack', minStack1.minStack);
}

