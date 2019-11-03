/*
 * function bind():
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = bind(alice.shout, alice);
 * boundShout(); // alerts 'alice'
 * boundShout = bind(alice.shout, {name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = bind(func, null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
*/

var bind = function (fn, obj, ...args) {
  return (...val) => {
    return fn.apply(obj, args.concat(val));
  }
};

var alice = {
  name: 'alice',
  shout: function () {
    console.log('value is', this.name);
    return (this.name)
  }
}

var boundShout = bind(alice.shout, alice);
boundShout(); // alerts 'alice'
boundShout = bind(alice.shout, { name: 'bob' });
boundShout(); // alerts 'bob'

var func = function (a, b) { return a + b };
var boundFunc = bind(func, null, 'foo');
var result = boundFunc('bar');
console.log(result === 'foobar'); // true

/*
 * Function.prototype.bind:
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
*/

Function.prototype.bind = function (obj, ...args) {
  return (...vals) => {
    return this.apply(obj, args.concat(vals));
  }
};

var boundShout1 = alice.shout.bind(alice);
boundShout1(); // alerts 'alice'
boundShout1 = alice.shout.bind({ name: 'bob' });
boundShout1(); // alerts 'bob'

var func = function (a, b) { return a + b };
var boundFunc = func.bind(null, 'foo');
var result = boundFunc('bar');
console.log(result === 'foobar'); // true

