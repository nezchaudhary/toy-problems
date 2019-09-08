/* 

You are building a diving board by placing a bunch of planks of wood end-to-end. There are two types of planks, one of length shorter and one of lengths longer. 
You must use exactly k plans of wood. Write a method to generate all possible lengths for the diving board.

*/

// Recursive Solution O (2 raised to k) (2 calls per k)

const getAllLengthsRecurse = (k, total, shorter, longer, lengths) => {
  if (k === 0) {
    lengths[total] = true;
    return;
  }

  getAllLengthsRecurse(k - 1, total + shorter, shorter, longer, lengths);
  getAllLengthsRecurse(k - 1, total + longer, shorter, longer, lengths);
};


const allLengthsRecurse = (k, shorter, longer) => {
  const lengths = {};
  getAllLengthsRecurse(k, 0 , shorter, longer, lengths);
  return Object.keys(lengths).length;
}

console.log(allLengthsRecurse(5, 10, 5));



// Memoization solution
const getAllLengthsMemoize = (k, total, shorter, longer, lengths, visited) => {
  if (k === 0) {
    lengths[total] = true;
    return;
  }

  const key = `${k} ${total}`;

  if (visited[key]) {
    return;
  }

  getAllLengthsMemoize(k - 1, total + shorter, shorter, longer, lengths, visited);
  getAllLengthsMemoize(k - 1, total + longer, shorter, longer, lengths, visited);
  visited[key] = true;
};

const allLengthsMemoize = (k, shorter, longer) => {
  const lengths = {};
  const visited = {};
  getAllLengthsMemoize(k, 0 , shorter, longer, lengths, visited);
  return lengths;
}

console.log(allLengthsMemoize(5, 10, 5));



// Optimal Solution O(k)
const allLengthsOptimal = (k, shorter, longer) => {
  const lengths = {};
  for (let nShorter = 0; nShorter <= k; nShorter++) {
    const nLonger = k - nShorter;
    const length = nShorter * shorter + nLonger * longer;
    lengths[length] = true;
  }
  return lengths;
}

console.log(allLengthsOptimal(5, 10, 5));