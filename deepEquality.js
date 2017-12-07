/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */
  
const deepEquals = function (apple, orange) {
  let isSameLength = Object.keys(apple).length === Object.keys(orange).length;

  if (!isSameLength) {
    return false;
  }

  let isSame = true;
  for (let key in apple) {
    if (typeof apple[key] === 'object') {
      isSame = isSame && deepEquals(apple[key], orange[key]);
    } else {
      isSame = isSame && (JSON.stringify(apple[key]) === JSON.stringify(orange[key]));
    }
    if (!isSame) {
      return false;
    }
  }
  return isSame;
};

console.log(deepEquals({ foo: 'bar' }, { foo: 'bar', biz: 'baz' })); // false;
console.log(deepEquals({ a: 1, b: { c: 3 } }, { a: 1, b: { c: 3 } })); // true
console.log(deepEquals({ a: 1, b: { c: 5 } }, { a: 1, b: { c: 6 } })); // false
console.log(deepEquals({ a: { b: 1, c: 2 }, b: { d: 4, e: { f: 5 } } }, { a: { b: 1, c: 2 }, b: { d: 4, e: { f: 5 } } })); //true
console.log(deepEquals({ a: { b: 1, c: 2 }, b: { d: 4, e: { f: 5 } } }, { a: { b: 1, c: 2 }, b: { d: 4, e: { f: 6 } } })); //false
console.log(deepEquals({ b: { c: { d: { f: 'hello', e: 'potato', g: [1, 2, 3] } } }, foo: 1 }, { foo: 1, b: { c: { d: { e: 'potato', f: 'hello', g: [1, 2, 3] } } } })); //true
