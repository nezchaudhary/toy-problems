const throttle = (func, limit) => {
  let users = {};
  // let inThrottle;
  return function (...args) {
    // let user = args[0];
    // let time = args[1];
    if (!users[user]) {
      users[user] = [];
      func(...args);
    } else if (users[user] < 5) {
      users[user]++;
      func(...args);
    } else {
      throw new Error ('Too many users');
    }
    setTimeout(() => users[user] = 0, limit)
  };
}

const add = (a, b) => console.log('result', a + b);

const addThrottle = throttle(add, 1000);
addThrottle(3, 4);
setTimeout(() => addThrottle(3, 4), 500);
addThrottle(3, 4);
addThrottle(3, 4);
addThrottle(3, 4);
addThrottle(3, 4);