const throttle = (delay, func, limit) => {
  let linkedList = new LinkedList();
  let queueList = new LinkedList();
  let count = 0;
  let max = limit;
  return function (...args) {
    let now = Date.now();
    if (count < max) {
      linkedList.add(now);
    } else if (count === max) {
      let windowStart = linkedList.value;
      if ((now - windowStart) > delay) {
        linkedList = linkedList.next;
        func(...args);
        linkedList.add(now);
      } 
    } else {
      // if you need to hold the pending requests
      let difference = now - windowStart;
      queueList.add(args);
      setTimeout(() => {
        let values = queueList.value;
        queueList = queueList.next();
        func(...values);
        linkedList.add(Date.now());
      }, difference);
    }
  };
}


class RateLimiter {
  constructor(func, delay, limit) {
    this.func = func;
    this.delay = delay;
    this.limit = limit;
    this.lastRequests = new LinkedList();
    this.queuedRequests = new LinkedList();
    this.requestCount = 0;
  }

  execute(...args) {
    let now = Date.now();
    if (this.requestCount < this.limit) {
      this.addToLastRequests(now);
    } else if (this.requestCount === this.limit) {
      let windowStart = this.lastRequests.head.value;
      if ((now - windowStart) > this.delay) {
        this.removeOldRequest();
        func(...args);
        this.addToLastRequests(now);
      }
    } else {
      // if you need to hold the pending requests
      let difference = now - windowStart;
      queueList.add(difference, args);
      setTimeout(() => {
        let values = this.queuedRequests.head.value;
        this.queuedRequests.head = this.queuedRequests.head.next;
        func(...values);
        this.addToLastRequests(Date.now());
      }, difference);
    }
  }

  queueRequest(difference, request) {
    if (!this.queueList.head) {
      this.queueList.head = new LinkedListNode(difference, request);
      this.queueList.tail = this.queueList.head;
      this.queuedRequest = this.queuedRequest.head;
    } else {
      this.queuedRequests.next = new LinkedListNode(difference, request) ;
      this.queuedRequests = this.queuedRequests.next;
    }
  }

  addToLastRequests(time) {
    if (!this.lastRequests.head) {
      this.lastRequests.head = new LinkedListNode(time);
      this.lastRequests.tail = this.lastRequests.head;
      this.lastRequest = this.lastRequests.head;
    } else {
      this.lastRequests.tail.next = newLinkedListNode(time);
      this.lastRequests.tail = this.lastRequests.tail.next;
    }
    this.requestCount++;
  }

  removeOldRequest() {
    this.lastRequests.head = this.lastRequests.head.next;
  }
}

const add = (a, b) => console.log('result', a + b);

// const addThrottle = throttle(add, 1000);
// addThrottle(3, 4);
// setTimeout(() => addThrottle(3, 4), 500);
// addThrottle(3, 4);
// addThrottle(3, 4);
// addThrottle(3, 4);
// addThrottle(3, 4);

const addLimiter = new RateLimiter(add, 50, 3);
addLimiter.execute(3, 4);
addLimiter.execute(4, 5);
addLimiter.execute(6, 7); 
addLimiter.execute(7, 8);
setTimeout(() => {
  addLimiter.execute(10, 10);
}, 100);