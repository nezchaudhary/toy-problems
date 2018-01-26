/*

Create a data structure setOfStacks that starts a new stack each time one
one stack exceeds capacity. For e.g. a stack of plates. It should have push()
and pop() functions that behave identical to a single stack. It should reutrn the
same values as it would if it were a single stack

*/

class setOfStacks {
  constructor(capacity) {
    this.capacity = capacity;
    this.stacks = [];
    this.stackCount = 1;
    this.size = 0;
    this.stacks[this.stackCount - 1] = [];
  }

  createStack () {
    this.stackCount += 1 ;
    this.stacks[this.stackCount - 1] = [];
  }

  push (value) {
    if (this.size < this.capacity) {
      this.stacks[this.stackCount - 1].push(value);
      this.size += 1;
    } else {
      this.size = 0;
      this.createStack();
      this.stacks[this.stackCount - 1].push(value);
      this.size += 1;
    }
  }

  pop () {
    let output;
    if (this.size > 0) {
      output = this.stacks[this.stackCount - 1].pop();
      this.size -= 1;
    } else {
      if (this.stacks.length > 0) {
        this.stacks.pop();
        this.stackCount -= 1;
        this.size = this.capacity;
        output = this.stacks[this.stackCount - 1].pop();
        this.size -= 1;
      } else {
        throw new Error('Stack is empty');
      }
    }

    return output;
  }

  popAt (index) {

  }

}

const stacks = new setOfStacks(2);
stacks.push(1);
stacks.push(2);
stacks.push(3);
stacks.push(4);
stacks.push(5);
// console.log(stacks.stacks); //[[1, 2], [3]];
// stacks.pop();
// console.log(stacks.stacks); // [[1, 2]];
// stacks.pop();
// console.log(stacks.stacks);
// stacks.pop();
// console.log(stacks.stacks);
