/*
Throttling enforces a maximum number of times a function can be called over time. As in 
"execute this function at most once every 100 milliseconds."

*/



const throttle = (func, limit) => {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func(...args)
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit)
    };
  }
}



const add = (a, b) => console.log('result', a + b);

const addThrottle = throttle(add, 1000);
addThrottle(3, 4);
setTimeout(() => addThrottle(3, 4), 500);
addThrottle(3, 4);
addThrottle(3, 4);
addThrottle(3, 4);
addThrottle(3, 4);