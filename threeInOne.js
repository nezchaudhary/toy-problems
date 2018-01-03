class MultiStack {
  constructor(totalStacks, stackSize) {
    this.numOfStacks = totalStacks;
    this.stackCapacity = stackSize;
    this.values = new Array(stackSize * totalStacks);
    this.stackSizes = new Array(totalStacks + 1).fill(0);
  }

  push(stackNum, value) {
    if (this.isFull(stackNum)) {
      throw new Error('Stack is Full');
    }
    this.stackSizes[stackNum]++;
    this.values[this.getIndex(stackNum)] = value;
  }

  pop(stackNum) {
    if (this.isEmpty(stackNum)) {
      throw new Error('Stack is Empty');
    }
    let index = this.getIndex(stackNum);
    let value = this.values[index];
    this.values[index] = 0;
    this.stackSizes[stackNum]--;
    return value;
  }

  isEmpty(stackNum) {
    return this.stackSizes[stackNum] === 0;
  }

  isFull(stackNum) {
    return this.stackSizes[stackNum] === this.stackCapacity;
  }

  getStackTopValue(stackNum) {
    if (this.isEmpty(stackNum)) {
      throw new Error('Stack is Empty');
    }
    return this.values[this.getIndex(stackNum)];
  }

  getIndex(stackNum) {
    return (stackNum * this.stackCapacity) + this.stackSizes[stackNum] - 1;
  }
}

const aStack = new MultiStack(3, 100);
aStack.push(1, 'abc');
aStack.push(2, 'cde');
aStack.push(1, 'fgh');
let value = aStack.pop(1);
console.log('value is', value); // 'fgh'
console.log('top value for 1', aStack.getStackTopValue(1)); // 'abc'
console.log('top value for 2', aStack.getStackTopValue(2)); // 'cde'
console.log(aStack.isEmpty(1)); // false
