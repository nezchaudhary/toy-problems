// var Foo = function( a ) { 
//   function bar() {   
//     return a; 
//   }
  
//   this.baz = function() {   
//     return a; 
//   };
// };

// Foo.prototype = {
//   biz: function() {    
//     return a; 
//   }
// };

// var f = new Foo( 7 );
// console.log(f.bar()); // throw an exception (not a function)
// console.log(f.baz()); // 7
// console.log(f.biz()); // a is not defined

/* 
````

fib(1000) => result is computed

fib(1000) => result is computed again

````

When we do,

memoize(fib) ==> a function which is a version of fibonacci which does not do unnecessary re-computation. So we could do this:

````

let memoizedFib = memoize(fib)

memoizedFib(1000) ==> result is computed

memoizedFib(1000) ==> no re-computation, the previous result has been cached and this call simply returns the value.

````
*/

/*
  (v) => {
    // v should be in memo
    // if not
    // calculate
  }
*/

// f = new Foo...

// const e = new Foo(6);

// const e.double = function() {
//   return this.a * 2 + arguments[0];
// }

// e.double() = 12
// f.double = e.double
// f.double() = 14

// e.double.call(f, 1);



function memoize(fn) {
  
  // input is a func
  // output is a result of that function
  // create a cache
  const memo = {};
  
  function memoizedFn(value) {
    // t
    // check cache
    console.log('memo is', memo);
    if (memo[value] !== undefined) {
      console.log('I came to cache', value);
      return memo[value];
    } else {
      const result = fn.call(this, value);
      console.log('I came to execute', value, result);
      memo[value] = result;
      return result;
  };
}

  return memoizedFn;
}

function fib(n) {
  return n <= 1 ? 1 : fib(n-1) + fib(n-2); 
}

const memoizedFib = memoize(fib);
memoizedFib(2); // compute it => 4
memoizedFib(3); // compute => 6
memoizedFib(2); // not compute => 4 
memoizedFib(10); // not compute => 4 
memoizedFib(5); // not compute => 4 