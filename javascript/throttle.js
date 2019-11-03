function sayHello() {
  console.log('Hello, World');
}

sayHello();

// click 'run'

// Throttle
/*
wait = 1000
a = 500
b = 700
cb = 1700

c = 1800

cb = 2800
*/


// const throttle = function (func, time) {
//   // call it once every <time>
//   let start;
//   let end;
//   return function () {
//     if (!start) {
//       start = Date.now();
//       end = start + time;
//     } else {
//       if (Date.now() > end) {
//         func();
//         start = Date.now();
//         end = start + time;
//       }
//     }
//   }
// }

function throttle(fn, limit) {  
  let waiting = false
  return (...args) => {
    if (!waiting) {
      fn.apply(this, args)
      waiting = true
      setTimeout(() => {
        waiting = false
      }, limit)
    }
  }
}

const sendAjax = throttle(sayHello, 1000);
sendAjax();
sendAjax();
setTimeout(() => {
  sendAjax();
}, 300);
setTimeout(() => {
  sendAjax();
}, 2000);
setTimeout(() => {
  sendAjax();
}, 2000);
