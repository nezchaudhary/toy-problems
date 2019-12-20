/*
CTCI - 8.6 - Towers of Hanoi - Ih the classic problem of the Towers of Hanoi, you have 3 towers and N disks of different sizes which can slide onto any tower. The puzzle starts with disks sorted in ascending order of size from top to bottom (i.e disk sits on top of an even larger one). You have the following constraints.

1) Only  one disk can be moved at a time.
2) A disk is slid off the top of one tower onto another tower.
3) A disk cannot be placed on top of a smaller disk.

Write a program to move the disks from the first tower to the last using a stack.

*/

const moveTop = (a, b) => {
  const top = a.pop();
  b.push(top);
}

const moveDisks = (n, origin, destination, buff) => {
  if (n <= 0) return;

  moveDisks(n - 1, origin, buff, destination);
  moveTop(origin, destination);
  moveDisks(n - 1, buff, destination, origin);
}

const origin = ['a', 5, 4, 3, 2, 1];
const destination = ['b'];
const buff = ['c'];

moveDisks(5, origin, destination, buff);
console.log('origin', origin);
console.log('destination', destination);
console.log('buffer', buff);

