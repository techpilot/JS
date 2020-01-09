const flatten = [[0, 1], [2, 3], [4, 5]].reduce(
  (a, b) => a.concat(b), []);

// DEBUG:
const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  (accumulator, array) => {
    debugger;
    return accumulator.concat(array)
  }, []);

  // console.log('array', array);
  // console.log('accumulator', accumulator);

// iife
// ist js file
var myApp = {}

// 2nd js file
(function(){
  myApp.add = function(a, b) {
    return a + b;
  }
})();

// Common JS + Browserify
// js1
module.exports = function add(a, b) {
  return a+b;
}

// js2
var add = require("./add");

// MODULES
// ES6+Webpack
export const add = (a, b) => a + b;
// or
export default function add() {
  return a + b;
}

import { add } from './add';
// OR
import add from './add';
