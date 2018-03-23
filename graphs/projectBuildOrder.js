// Project class
class Project {
  constructor(name) {
    this.children = []; //project array
    this.map = {}; // edges
    this.name = name;
    this.dependencies = 0;
  }

  addNeighbor(node) {
    if(!this.map[node]) {
      this.children.add(node);
      this.map[node.getName()] =  node;
      node.incrementDependencies();
    }
  }

  incrementDependencies() {
    this.dependencies++;
  }

  decrementDependencies() {
    this.dependencies--;
  }

  getName() {
    return this.name;
  }

  getChildren() {
    return this.children;
  }

  getNumberDependencies() {
    return this.dependencies;
  }
}

// Graph Class
class Graph {
  constructor() {
    this.nodes = [];
    this.map = {};
  }

  getOrCreateNode(name) {
    if (!this.map[name]) {
      node = new Project(name);
      nodes.push(node);
      this.map[name] = node;
    }
    return this.map[name];
  }

  addEdge(startName, endName) {
    let start = this.getOrCreateNode(startName);
    let end = this.getOrCreateNode(endName);
    start.addNeighbor(end);
  } 
  
  getNodes() {
    return this.nodes;
  }
}

// Helper function to insert projects with zero dependencies into the order array starting at offset index
const addNonDependent = (order, projects, offset) => {
  for (let project of projects) {
    if (project.getNumberDependencies() === 0) {
      order[offset] = project;
      offset++;
    }
  }
  return offset;
}


// function that creates a graph creating edges a to b if b is dependent on a.
const buildGraph = (projects, dependencies) => {
  let graph = new Graph();
  for (let project of projects) {
    graph.getOrCreateNode(project);
  }

  for (let dependency of dependencies) {
    let first = dependency[0];
    let second = dependency[1];
    graph.addEdge(first, second);
  }
  return graph;
}

// Return a list of the projects correct build order
const orderProjects = (projects) => {
  let order = new Array(projects.length); // total number of projects
  let endOfList = addNonDependent(order, projects, 0);
  let toBeProcessed = 0;
  while(toBeProcessed < order.length) {
    let current = order[toBeProcessed];

    if (current === null) {
      return null;
    }

    let children = current.getChildren();
    for (let child of children) {
      child.decrementDependencies();
    }

    endOfList = addNonDependent(order, children, endOfList);
    toBeProcessed++;
  }
  return order;

}



// main function call to problem
const findBuildOrder = (projects, dependencies) => {
  let graph = buildGraph(projects, dependencies);
  return orderProjects(graph.getNodes());
};
