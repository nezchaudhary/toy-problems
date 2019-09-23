/*

CTCI - Trees & Graphs 4.7

Topological Sort

Build Order: You are given a list of projects and a list of dependencies (which is a list of pairs of projects where the second project is dependent on the first project.) All of a project's dependencies must be built before the project is. Find a build order that will allow the projects to be built. If there is no valid build order, return an error.

EXAMPLE:
  Input:
    projects: a, b, c, d, e, 
    dependencies: (a, d), (f, b), (b, d), (f, a), (d, c)
Output:
  f, e, a, b, d, c

*/

// Common to Solutions
// Project class
class Project {
  constructor(name) {
    this.children = []; //project array
    this.map = {}; // edges
    this.name = name;
    this.dependencies = 0;
    this.state = 'blank';
  }

  addNeighbor(node) {
    if(!this.map[node]) {
      this.children.push(node);
      this.map[node.name] =  node;
      node.dependencies++;
    }
  }
}

// Common to Solutions
// Graph Class
class Graph {
  constructor() {
    this.nodes = [];
    this.map = {};
  }

  getOrCreateNode(name) {
    if (!this.map[name]) {
      const node = new Project(name);
      this.nodes.push(node);
      this.map[name] = node;
    }
    return this.map[name];
  }

  addEdge(startName, endName) {
    let start = this.getOrCreateNode(startName);
    let end = this.getOrCreateNode(endName);
    start.addNeighbor(end);
  } 
}

// Common to Solutions
// Helper function to insert projects with zero dependencies into the order array starting at offset index 
const addNonDependent = (order, projects, offset) => {
  for (let project of projects) {
    if (project.dependencies === 0) {
      order[offset] = project;
      offset++;
    }
  }
  return offset;
}

// Common to Solutions
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

//------------------------------------------- //

// Solution 1
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

    let children = current.children;
    for (let child of children) {
      child.dependencies--;
    }

    endOfList = addNonDependent(order, children, endOfList);
    toBeProcessed++;
  }
  return order;
}

// main function call to problem
const findBuildOrder = (projects, dependencies) => {
  let graph = buildGraph(projects, dependencies);
  return orderProjects(graph.nodes);
};


//-------------------------------------------------//

// Solution 2
// DFS
const doDFS = (project, stack) => {
  if (project.state === 'partial') {
    return false; // Cycle
  }

  if (project.state === 'blank') {
    project.state = 'partial';
    const children = project.children;
    for (let child = 0; child < children.length; child++) {
      if (!doDFS(child, stack)) {
        return false;
      }
    }
    project.state = 'complete';
    stack.push(project);
  }
  return true;
}


const orderProjectsDFS = projects => {
  const stack = new Array();
  for (let project of projects) {
    if (project.state === 'blank') {
      if (!doDFS(project, stack)) {
        return null;
      }
    }
  }
  return stack;
}

const findBuildOrderDFS = (projects, dependencies) => {
  let graph = buildGraph(projects, dependencies);
  return orderProjectsDFS(graph.nodes);
}

console.log('Normal', findBuildOrder([1, 0, 2, 3], [[0, 1], [0, 2], [1, 3], [2, 3]])) // [0, 1, 2, 3]
console.log('DFS', findBuildOrderDFS([1, 0, 2, 3], [[0, 1], [0, 2], [1, 3], [2, 3]])); //// [0, 1, 2, 3]