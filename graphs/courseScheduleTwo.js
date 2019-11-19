/*
There are a total of n courses you have to take, labeled from 0 to n-1.

Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

Given the total number of courses and a list of prerequisite pairs, return the ordering of courses you should take to finish all courses.

There may be multiple correct orders, you just need to return one of them. If it is impossible to finish all courses, return an empty array.

Example 1:

Input: 2, [[1,0]] 
Output: [0,1]
Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1] .
Example 2:

Input: 4, [[1,0],[2,0],[3,1],[3,2]]
Output: [0,1,2,3] or [0,2,1,3]
Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0. So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3] .
Note:

The input prerequisites is a graph represented by a list of edges, not adjacency matrices. Read more about how a graph is represented.
You may assume that there are no duplicate edges in the input prerequisites.

*/

// Topological Sort
// Course Class
class Course {
  constructor(name) {
    this.name = name;
    this.dependencies = 0;
    this.edges = {};
    this.children = [];
  }
  
  addDependency(node) {
    if (!node.edges[this.name]) {
      node.edges[this.name] = this;
      node.children.push(this);
      this.dependencies++;
    }
  }
}

// Graph Class
class Graph {
  constructor() {
    this.nodes = [];
    this.map = {};
  }
  
  addOrGetNode(name) {
    let node = this.map[name];
    if (!node) {
      node = new Course(name);
      this.nodes.push(node);
      this.map[name] = node;
    }
    return node;
  }
  
  addEdge(start, end) {
    const startNode = this.addOrGetNode(start);
    const endNode = this.addOrGetNode(end);
    startNode.addDependency(endNode);
  }
}

const buildGraph = (courses, prerequisites) => {
  const graph = new Graph();
  for (let course of courses) {
    graph.addOrGetNode(course);
  }
  
  for (let prerequisite of prerequisites) {
    const [course, dependency] = prerequisite;
    graph.addEdge(course, dependency);
  }
  return graph;
}

const handleNonDependents = (courses, order, offset) => {
  for (let course of courses) {
    if (course.dependencies === 0) {
      order[offset] = course;
      offset++;
    }
  }
  return offset;
}

const orderCourses = courses => {
  const order = [];
  let offset = handleNonDependents(courses, order, 0);
  let i = 0;
  while(i < order.length) {
    const currentCourse = order[i];
    if (!currentCourse) {
      return null;
    }
    
    let children = currentCourse.children;
    
    for (let child of children) {
      child.dependencies--;
    }
    
    offset = handleNonDependents(children, order, offset);
    i++;
  }
  if (order.length < courses.length) return [];
  return order.map(course => course.name);
  
}

// main function call to problem
const findOrder = (courseCount, prerequisites) => {
  const courses = [];
  for (let i = 0; i < courseCount; i++) {
    courses.push(i);
  }
  const graph = buildGraph(courses, prerequisites);
  return orderCourses(graph.nodes);
};

// console.log('Topological Order', findOrder(4, [[1,0],[2,0],[3,1],[3,2]]));
console.log('Topological Order', findOrder(3, [[1,0],[1,2],[0,1]]));
