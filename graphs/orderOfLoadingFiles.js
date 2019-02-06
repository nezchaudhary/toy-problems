/*
Write a function that figures out the order of things in which files should 
load files to ensure that each file is loaded after its dependencies

Assume that your function is passed dependencies and root file

For e.g dependencies: {
  a: ['b', 'c'],
  b:[],
  c: ['b'],
  z:['a']
};
rootFile: 'a'

should return ['b', 'c', 'a']. 'z' is not included because its not necessary
to load the root file.

Your solution needs to find the proper order to load the files. It does not
actually need to read files from disk
*/

class File {
  constructor(name) {
    this.name = name;
    this.dependencies = [];
    this.map = {};
    this.dependencyCount = 0;
  }

  getDependencies() {
    return this.dependencies;
  }

  addDependency(dependency) {
    if (!this.map[dependency.name]) {
      this.dependencies.push(dependency);
      this.map[dependency.name] = dependency;
      dependency.incrementDependencies++;
    }
  } 

  incrementDependencies() {
    this.dependencyCount++;
  }

  decrementDependencies() {
    this.dependencyCount--;
  }

  getDependencyCount() {
    return this.dependencyCount;
  }
  
}

class Graph {
  constructor() {
    this.nodes = [];
    this.map = {};
  }
  getOrCreateNode(file) {
    if (!this.map[file]) {
      let fileNode = new File(file);
      this.nodes.push(fileNode);
      this.map[file] = fileNode; 
    }
    return this.map[file];
  }

  getNodes() {
    return this.nodes;
  }

  addEdge(file, dependency) {
    let start = this.map[file];
    let end = this.map[dependency];
    start.addDependency(end);
  }
}

const buildGraph = (allFiles) => {
  let graph = new Graph();

  for (let file in allFiles) {
    graph.getOrCreateNode(file);
    let dependencies = allFiles[file];
    dependencies.forEach(dependency => {
      graph.getOrCreateNode(dependency);
      graph.addEdge(file, dependency);
    });
  }
  return graph;
};

const findOrder = (order, file, graph, visited) => {
  let root = graph.getOrCreateNode(file);
  if (root.dependencies.length === 0 && !visited[file]) {
    order.push(file);
    visited[file] = true;
    return order;
  } else {
    root.getDependencies().forEach(dependency => {
      findOrder(order, dependency.name, graph, visited);
    });
  }
  !visited[file] ? order.push(file): null;
  return order;
}

const loadFilesInOrder = (dependencies, rootFile) => {
  const fileGraph = buildGraph(dependencies);
  let result = [];
  let visited = {};
  return findOrder(result, rootFile, fileGraph, visited);

}

const dependencies = {
  a: ['b', 'c'],
  b:[],
  c: ['b'],
  z:['a']
};

console.log(loadFilesInOrder(dependencies, 'a'));
console.log(loadFilesInOrder(dependencies, 'b'));
console.log(loadFilesInOrder(dependencies, 'c'));
console.log(loadFilesInOrder(dependencies, 'z'));