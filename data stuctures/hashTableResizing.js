/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function (str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var makeHashTable = function () {
  var result = {};
  var storage = [];
  var storageLimit = 4;
  var size = 0;

  result.insert = function (key, value) {
    let index = getIndexBelowMaxForKey(key, storageLimit);
    let found = false;
    if (storage[index]) {
      storage[index].forEach(tuple => {
        if (tuple[0] === key) {
          tuple[1] = value;
          found = true;
        }
      })
      if (!found && storage[index]) {
        storage[index].push([key, value]);
        size++;
      }
    } else {
      storage[index] = [[key, value]];
      size++;
    }
    // check size of hash table after each insert
    // if it is 3/4 the size of the limit, double it
    if (size >= Math.floor(0.75 * storageLimit)) {
      // create a new storage with double the size
      result.resize(storageLimit * 2);
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
          size--;
        }
      });
    }

    // on removal, check if size has reduced to less than or equal to 1/4th
    // if it is less than 1/4, reduce by half
    if (size <= Math.floor(storageLimit * 0.25)) {
      result.resize(Math.floor(storageLimit / 2));
    }
    return output ? output[1] : output;
  };

  result.resize = function (limit) {
    // resize hash table here
    let temp = storage;
    storage = [];
    storageLimit = limit;
    size = 0;
    temp.forEach(bucket => {
      bucket.forEach(tuple => {
        result.insert(tuple[0], tuple[1]);
      });
    });
    console.log('now storage limit is', storageLimit);
  }

  result.getSize = function () {
    return size;
  }

  return result;
};

const hashtable = makeHashTable();
hashtable.insert('a', 'b'); // undefined
hashtable.insert('c', 'd'); // undefined
hashtable.insert('c', 'e'); // undefined
hashtable.insert('f', 'g'); // undefined
console.log(hashtable.retrieve('c')); // e
console.log(hashtable.getSize()); // 3
console.log(hashtable.retrieve('f')); // g
console.log(hashtable.remove('f'));  // g
console.log(hashtable.getSize()); // 2
console.log(hashtable.remove('c')); // e
console.log(hashtable.getSize()); // 1
g