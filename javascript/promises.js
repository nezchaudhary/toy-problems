// val is passed by reference to func, not by value
let val = 'bar';

const func = () => {
  setTimeout(() => {
    console.log(val + 'boo');
  });
}

val = 'wut';
const p = func();
val = 'baz';

console.log('foo');