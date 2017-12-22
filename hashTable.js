/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * The hashtable does not need to resize but it should still handle collisions.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
const getIndexBelowMaxForKey = function (str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};


//used function below to test for collisions;

// getIndexBelowMaxForKey = (str, max) => {
//   return 1;
// }

var makeHashTable = function () {
  const result = {};
  const storage = [];
  const storageLimit = 1000;
  result.insert = (key, value) => {
    const index = getIndexBelowMaxForKey(key, storageLimit);
    let found = false;
    if (storage[index]) {
      storage[index].forEach(tuple => {
        if (tuple[0] === key) {
          tuple[1] = value;
          found = true;
        }
      })

      if (!found) {
        storage[index].push([key, value]);
      }
    } else {
      storage[index] = [[key, value]];
    }
  };

  result.retrieve = function (key) {
    const index = getIndexBelowMaxForKey(key, storageLimit);
    const output = storage[index] ? storage[index].find(tuple => tuple[0] === key) : undefined
    return output ? output[1] : output;
  };

  result.remove = function (key) {
    const index = getIndexBelowMaxForKey(key, storageLimit);
    let output;

    if (storage[index]) {
      storage[index].forEach((tuple, i) => {
        if (tuple[0] === key) {
          output = tuple;
          storage[index].splice(i, 1);
        }
      });
    }
    return output ? output[1] : output;
  };
  return result;
};

const table = makeHashTable();
table.insert('a', 'b');
table.insert('c', 'd');
table.insert('e', 'f');
console.log(table.retrieve('a')) // 'b'
console.log(table.retrieve('c')) // 'd'
console.log(table.retrieve('e')); // 'f'
console.log(table.retrieve('f')); // undefined
table.insert('a', 'z');
console.log(table.remove('e')); // 'f'
console.log(table.retrieve('e')); // undefined
console.log(table.remove('g')); // undefined
console.log(table.retrieve('a')); // 'z'





