// val is passed by reference to func, not by value
// let val = 'bar';

// const func = () => {
//   setTimeout(() => {
//     console.log(val + 'boo');
//   });
// }

// val = 'wut';
// const p = func();
// val = 'baz';

// console.log('foo');




function foo(n) {
  console.log('foo');
  
  return new Promise(resolve => {
    console.log('foo timeout before');
    
    setTimeout(() => {
      console.log('foo timeout');

      resolve(`foo resolved - ${n}`);
    }, 4000);
    
    console.log('foo timeout after');
  });
}

function bar() {
  console.log('bar');
  
  return new Promise(resolve => {
    console.log('bar timeout before');
    
    setTimeout(() => {
      console.log('bar timeout');
      
      resolve('bar resolved');
    }, 3000);
    
    console.log('bar timeout after');
  });
}

// // 1
// foo()
//   .then(function(res) {
//     return bar();
//   });



// // 2
// foo()
//   .then(bar);
  
console.log('break');
// 3
foo(1)
  .then(bar())
  .then((res) => {
    console.log('inside then 1: ' + res);
    return foo(2);
  })
  .then(function(res) {
    console.log('inside then 2: ' + res);
  })
  .then(function(res) {
    console.log('inside then 3: ' + res);
  });


// // 4
// foo()
//   .then(function(res) {
//     bar();
//   });
