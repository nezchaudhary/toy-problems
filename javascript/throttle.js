
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

/*
Throttling enforces a maximum number of times a function can be called over time. As in 
"execute this function at most once every 100 milliseconds."

*/



const throttle = (func, limit) => {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit)
    };
  }
}



const add = (a, b) => console.log('result', a + b);
function sayHello() {
  console.log('Hello, World');
}

sayHello();


const addThrottle = throttle(add, 1000);
addThrottle(3, 4);
setTimeout(() => addThrottle(3, 4), 500);
addThrottle(3, 4);
addThrottle(3, 4);
addThrottle(3, 4);
addThrottle(3, 4);


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
