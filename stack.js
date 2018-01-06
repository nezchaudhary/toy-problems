class Stack {
  constructor(size) {
    this._storage = new Array(size);
    this.index = 0;
    this.min = [];
  }

  push(value) {
    if (this.isFull()) {
      throw new Error('Stack is full');
    }
    this._storage[this.index++] = value;
    let smallestValueIndex = this.min.length - 1;
    if (smallestValueIndex < 0 || this.min[smallestValueIndex] > value) {
      this.min.push(value);
    } else {
      this.addToMin(value);
    }
  }

  addToMin(value, low = 0, high = this.min.length - 1) {
    if (low > high) {
      return;
    }
    let midpoint = Math.floor((high + low) / 2);
    if (this.min[midpoint] < value && this.min[midpoint - 1] < value) {
      return this.addToMin(value, low, midpoint - 1);
    } else if (this.min[midpoint] > value && this.min[midpoint + 1] > value) {
      return this.addToMin(value, midpoint + 1, high);
    } else if (this.min[midpoint] < value && (this.min[midpoint - 1] > value || midpoint === 0)) {
      this.min.splice((midpoint <= 0 ? 0 : midpoint), 0, value);
    } else {
      this.min.splice(midpoint + 1, 0, value);
    }
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error('Stack is Empty');
    }
    let value = this._storage[--this.index];
    this._storage[this.index] = undefined;

    if (value === this.min[this.min.length - 1]) {
      this.min.pop();
    }
    return value;
  }

  isFull() {
    return this.index === (this._storage.length - 1);
  }

  isEmpty() {
    return this.index === -1;
  }

  getMin() {
    let value = this.min[this.min.length - 1];
    if (value) {
      return value;
    }

    throw new Error('Stack is empty');
  }

  getStackTopValue() {
    if (this.index - 1 < 0) {
      throw new Error('Stack is empty');
    }
    return this._storage[this.index - 1];
  }
}

let aStack = new Stack(7);
aStack.push(4);
aStack.push(3);
console.log(aStack.getMin()); // 3
aStack.push(6);
aStack.push(5);
aStack.push(2);
aStack.push(1);
console.log(aStack.pop()); // 1
console.log(aStack.getMin()); // 2
console.log(aStack.getStackTopValue()); // 2
console.log(aStack.pop()); // 2
console.log(aStack.getMin()); // 3
console.log(aStack.getStackTopValue()); // 5



