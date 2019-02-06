/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 * 
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true 
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/

/*
 * Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
*/

Array.prototype.isSubsetOf = function (arr) {
  // your code here
  //o: boolean whether if its a subset
  //i: an array that 'this' array checks if it is a subset of
  //c: should disregard duplicates
  //e: 1) if 'this' is an empty array and input is not, assuming to return false, 
  // 2) it could have objects and arrays
  if (this.length === 0 && arr.length === 0) {
    return true;
  } else if (this.length === 0 && arr.length !== 0) {
    return false;
  }

  return this.every(value => {
    return arr.some(element => {
      return JSON.stringify(value) === JSON.stringify(element);
    });
  });
};

var a = ['commit', 'push']
var x = a.isSubsetOf(['commit', 'rebase', 'push', 'blame']); // true
console.log('x', x);

var b = ['merge', 'reset', 'reset'];
var y = b.isSubsetOf(['reset', 'merge', 'add', 'commit']) // true 
console.log('y', y);

var c = [];
var z = c.isSubsetOf(['reset', 'merge', 'add', 'commit']) // false 
console.log('z', z);

//check for objects
var d = [{ a: 1, b: 2 }];
var a = d.isSubsetOf(['reset', { a: 1, b: 2 }, 'add', 'commit']) // true 
console.log('a', a);

//check for arrays
var e = [[1, 2], [3, 4]];
var b = e.isSubsetOf(['reset', { a: 1, b: 2 }, [1, 2], 'commit']) // false 
console.log('b', b);

var f = [[1, 2], [3, 4], 'commit'];
var c = f.isSubsetOf(['reset', { a: 1, b: 2 }, [1, 2], [3, 4], 'commit']) // true 
console.log('c', c);

