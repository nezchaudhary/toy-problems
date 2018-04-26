class Node {
  constructor({ coordinate, distance }) {
    this.coordinate = coordinate;
    this.distance = distance;
  }
};

class MaxHeap {
  constructor () {
    this._heap = [];
  }

  insert(node) {
    this._heap.push(node);
    let currentIndex = this._heap[this._heap.length - 1];
    let parentIndex = Math.floor((currentIndex - 1) / 2);
    while (this._heap[parentIndex] && this._heap[currentIndex] > this._heap[parentIndex]) {
      [this._heap[currentIndex], this._heap[parentIndex]] = [this._heap[parentIndex], this._heap[currentIndex]];
      let currentIndex = parentIndex;
      let parentIndex = Math.floor((currentIndex - 1) / 2);
    }
  }

  remove() {
    let output = null;
    if (this._heap.length === 1) output = this._heap.pop();
    [this._heap[0], this._heap[this._heap.length - 1]] = [this._heap[this._heap.length - 1], this._hea[0]];
    output = this._heap.pop();
    let currentIndex = 0;
    let leftChild = (currentIndex * 2) + 1;
    let rightChild = (currentIndex * 2) + 2;
    let largerChild;
    if (leftChild && rightChild) {
      largerChild = leftChild.distance > rightChild.distance ? leftChild : rightChild;
    } else {
      largerChild = leftChild ? leftChild : rightChild;
    }

    while (this._heap[largerChild] && this._heap[currentIndex].distance < this._heap[largerChild].distance) {
      [this._heap[currentIndex], this._heap[largerChild]] = [this._heap[largerChild], this._heap[currentIndex]];
      let currentIndex = largerChild;
      leftChild = (currentIndex * 2) + 1;
      right = (currentIndex * 2) + 2;
    }
    return output;
  }

  peek() {
    return this._heap[0];
  }

  values() {
    return this._heap;
  }

  size() {
    return this._heap.length;
  }
 }


const kClosestElements = (coordinates, point, k) => {
  let pointX = point[0];
  let pointY = point[1];
  let heap = new MaxHeap();

  for (let i = 0; i <  coordinates.length; i++) {
    let coordinate = coordinates[i];
    let distance = Math.sqrt((coordinate[0] - pointX) ** 2 + (coordinate[1] - pointY) ** 2);
    let node;
      if (heap.size() < k) {
        node = new Node({ coordinate, distance });
        heap.insert({ coordinate, distance });
      } else if (distance < heap.peek()) {
        heap.remove();
        node = new Node({ coordinate, distance });
        heap.insert({ coordinate, distance });
      }
  }

  return heap.values().map(value => value.coordinate);
};

console.log(kClosestElements([[2, 3], [1, 4], [2, 5], [6, 6], [4, 1], [3, 4]], [2, 4], 3));