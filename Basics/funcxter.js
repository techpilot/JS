//  IIFE
(function() {
  var a = 1;
})()


// Function Scope- creating a new environment only when a function is declared.
// 'var secret' can be accessed globally cos in js a new lexical environment is created only when a function is declared. But using let and const, js can Block Scope
if(5 > 3) {
  var secret = '12344'
}

function secre() {
  var secreted = '12345'
}

// Block Scope- means creating a new lexical environment each time there is a curly brcaket in a language, js function scopes but also block scopes when let and const is used.
if(5 > 3){
  const secrete = '123456'
}

// without any variable keyword, 'i' can be accessed from any env but var 'i' can only be accessed from the func lexical env, with let&const 'i' can only accessed inside the for loop env.
function loop() {
  for(i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(i);
}
loop();


// keywords like let, var, const tells the engine where to the lexical environment is, so that when a variable doesn't have these three stuff, it will be taken to a global env and accessed globally even if it was in a function.
// "USE STRICT" tells js to follow the main js structure of predictable program
var weird = () => {
  height = 50;
  return height;
}
weird();

var heyhey = function doodle() {
  doodle();
  return 'heyehey';
}

// SCOPE CHAIN- gives access to variables in the parent function
var x = 'x';

var findName = () => {
  console.log(x);
  var b = 'b';
  return printName();
}

var printName = () => {
  var c = 'c';
  return 'Stephen Ngwu';
}

var sayMyName = () => {
  var a = 'a';
  return findName();
}

sayMyName();

// FUNCTION LEXICAL ENVIRONMENT
var sayMyName = () => {
  var a = 'a';
  return findName = () => {
    var b = 'b';
    return printName = () => {
      console.log(b);
      var c = 'c';
      return 'Stephen Ngwu';
    }
  }
}
sayMyName()()();


// use of array.from
function marry(person1, person2) {
	console.log('arguments', arguments);
	console.log(Array.from(arguments));
	return `${person1} is married to ${person2}`;
}
marry('Omg', 'Lior');

// use of default arguments
function marry2(...args) {
	console.log('arguments', args);
	console.log(Array.from(arguments));
	return `${args[0]} is married to ${args[1]}`;
}
marry2('Stephen', 'Lior');


function two(){
  var isValid;
}

function one() {
  var isValid = true;
  two();
}

var isValid = false;
one();
