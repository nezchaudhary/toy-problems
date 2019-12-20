/*

You are given 2 arrays representing integer locations of stores and houses (each location in this problem is one-dementional). For each house, find the store closest to it.
Return an integer array result where result[i] should denote the location of the store closest to the i-th house. If many stores are equidistant from a particular house, choose the store with the smallest numerical location. Note that there may be multiple stores and houses at the same location.

Example 1:

Input: houses = [5, 10, 17], stores = [1, 5, 20, 11, 16]
Output: [5, 11, 16]
Explanation: 
The closest store to the house at location 5 is the store at the same location.
The closest store to the house at location 10 is the store at the location 11.
The closest store to the house at location 17 is the store at the location 16.
Example 2:

Input: houses = [2, 4, 2], stores = [5, 1, 2, 3]
Output: [2, 3, 2]
Example 3:

Input: houses = [4, 8, 1, 1], stores = [5, 3, 1, 2, 6]
Output: [3, 6, 1, 1]
*/

class Graph {
  constructor() {
    this.nodes = [];
    this.adjacencyList = {};
  }

  addNode(node) {
    this.nodes.push(node); 
    this.adjacencyList[node] = [];
  }

  addEdge(node1, node2, weight) {
    this.adjacencyList[node1].push({node:node2, weight: weight});
    this.adjacencyList[node2].push({node:node1, weight: weight});
  }
}

class PriorityQueue {
  constructor() {
    this.collection = [];
  }

  enqueue(element){
    if (this.isEmpty()){ 
      this.collection.push(element);
    } else {
      let added = false;
      for (let i = 1; i <= this.collection.length; i++){
        if (element[1] < this.collection[i-1][1]){ 
          this.collection.splice(i-1, 0, element);
          added = true;
          break;
        }
      }
      if (!added){
          this.collection.push(element);
      }
    }
  };

  dequeue() {
    let value = this.collection.shift();
    return value;
  };
  isEmpty() {
    return (this.collection.length === 0) 
  };
}

const findPathWithDijkstra = (startNode, endNode) => {
  let times = {};
  let backtrace = {};
  let pq = new PriorityQueue();

  times[startNode] = 0;
  
  this.nodes.forEach(node => {
    if (node !== startNode) {
      times[node] = Infinity
    }
  });

  pq.enqueue([startNode, 0]);

  while (!pq.isEmpty()) {
    let shortestStep = pq.dequeue();
    let currentNode = shortestStep[0];
    this.adjacencyList[currentNode].forEach(neighbor => {
      let time = times[currentNode] + neighbor.weight;

      if (time < times[neighbor.node]) {
        times[neighbor.node] = time;
        backtrace[neighbor.node] = currentNode;
        pq.enqueue([neighbor.node, time]);
      }
    });
  }

  let path = [endNode];
  let lastStep = endNode;
  while(lastStep !== startNode) {
    path.unshift(backtrace[lastStep])
    lastStep = backtrace[lastStep]
  }
  return `Path is ${path} and time is ${times[endNode]}`
}

// const storesAndHouses = (houses, stores) => {
//   const sortedStores = stores.sort((a, b) => a - b);
//   let visited = {};
//   let i = 0;
//   let result = [];

//   while (i < houses.length) {
//     let house = houses[i];
//     if (visited[house] !== undefined) {
//       result[i] = house;
//     } else {
//       let low = 0;
//       let high = stores.length - 1;
//       let mid = Math.floor((low + high)/2);
//       while (low <= high && high < stores.length) {
//         let store = sortedStores[mid];
//         if (store === house) {
//           result[i] = store;
//           visited[store] = mid;
//           break;
//         } else if (store < house) {
//           low = mid + 1;
//         } else if (store > house) {
//           high = mid - 1;
//         }
//         mid = Math.floor((low + high)/2);
//       }
//     }
//     i++;
//   }
//   return result;
// }

console.log('store and houses', storesAndHouses([2, 4, 2], [5, 1, 2, 3]));