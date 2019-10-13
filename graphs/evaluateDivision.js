/*

Equations are given in the format A / B = k, where A and B are variables represented as strings, and k is a real number (floating point number). Given some queries, return the answers. If the answer does not exist, return -1.0.

Example:
Given a / b = 2.0, b / c = 3.0.
queries are: a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ? .
return [6.0, 0.5, -1.0, 1.0, -1.0 ].

The input is: vector<pair<string, string>> equations, vector<double>& values, vector<pair<string, string>> queries , where equations.size() == values.size(), and the values are positive. This represents the equations. Return vector<double>.

According to the example above:

equations = [ ["a", "b"], ["b", "c"] ],
values = [2.0, 3.0],
queries = [ ["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"] ]. 
 

The input is always valid. You may assume that evaluating the queries will result in no division by zero and there is no contradiction.

*/


/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */

const evaluate = (query, neighbors) => {
  const [nom, denom] = query;
  if (!(nom in neighbors) || !(denom in neighbors)) return -1;
  if (nom === denom) return 1;
  
  let queue = neighbors[nom].slice();
  let visited = new Set();
  
  while (queue.length) {
    const [variable, value] = queue.shift();
    
    if (variable === denom) return value;
    visited.add(variable);
    
    const next = neighbors[variable];
    next.forEach(([next, nextValue]) => {
      if (visited.has(next)) return;
      queue.push([next, nextValue * value]); // since variable is the common value, it gets negated
    });
  }
  
  return -1;
}

const calcEquation = function(equations, values, queries) {
  let neighbors = {};
  
  equations.forEach(([nom, denom], idx) => {
    const curValue = values[idx];
    neighbors[nom] = neighbors[nom] || [];
    neighbors[nom].push([denom, curValue]);
    
    neighbors[denom] = neighbors[denom] || [];
    neighbors[denom].push([nom, 1 / curValue]);
  });
  
  let result = [];
  for (let query of queries) {
    result.push(evaluate(query, neighbors));
  }
  
  return result;
};


console.log(calcEquation([["a", "b"], ["b", "c"]], [2.0, 3.0],[ ["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"] ]));