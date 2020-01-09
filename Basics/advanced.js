// ASYNCHRONOUS JS
setTimeout(() => {console.log('1', 'is the loneliest number')}, 1);
setTimeout(() => {console.log('2', 'is the second number')}, 1);
console.log('3', 'is the third number');

setTimeout(() => {console.log('1', 'is the loneliest number')}, 1000);
setTimeout(() => {console.log('2', 'is the second number')}, 10);
console.log('3', 'is the third number');

setTimeout(() => {console.log('1', 'is the loneliest number')}, 0);
Promise.resolve('hi').then(() => {console.log('2')});
console.log('3', 'is the third number');

function jsengine(code) {
	return code.split(/\s+/)
}
jsengine('var a = 6');

// STACK OVERFLOW
var inception = () => inception();

// MEMORY CRASH/LEAK
let array = [];
for (i = 5; i > 1; i++ ) {
	array.push(i-1);
}

// HOW THE WEB API HELPS IN JS RUNTIME
console.log('1');
setTimeout(() => {console.log('2'), 1});
console.log('3');

// HOISTING- moving functions or var to the top of their respective environments during compilation
console.log('1------');
console.log(teddy);
console.log(sing());
var teddy = 'bear';
var sing = () => console.log('ooohh!');


const subtractTwo = (num) => num - 2;
const calculate = () => {
  const sumTotal = 5 + 4;
  return subtractTwo(sumTotal);
}
calculate();


const first = () => {
  const greet = 'Hi';
  const second = () => {
    alert(greet);
  }
  return second;
}

const newFunc = first();
newFunc();

// Closures - a function ran, executed and never going to be executed again
// But is going to remember that there are references to those variables,
// so the child scope always has access to the parent scope


// Currying - converting a multi-arguments function to accept just a single argument/parameter
const multiply = (a, b) => a + b;
const curriedMultiply = (a) => (b) => a * b;
const multiplyBy5 = curriedMultiply(5);
// curriedMultiply(3);

// Compose - putting two functions together to form a third one where the output of one function is the other's input
const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;

compose(sum, sum)(5);

// Advanced array
const array = [1, 2, 10, 11];

const double = []
const newArray = array.forEach(num => double.push(num * 2))

// console.log(double);

//  map, filter and reduce
const mapArray = array.map(num => num * 2)
console.log("mapArray", mapArray);

// filter
const filterArray = array.filter(num => num > 5)
console.log(filterArray);

// reduce
const reduceArray = array.reduce((accumulator, num) => {
  return accumulator + num;
}, 5);
console.log('reduce', reduceArray);

// Advanced Object
// reference types
var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};

// context
const object4 = {
  a: bee = () => console.log(this)
}
// console.log(object4.a());

// instantiation-make a copy of an obj and reuse the code.
class Player{
  constructor(name, type) {
    console.log(this);
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log('Hi am ${this.name}, am a ${this.type}');
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type)
  }
  play() {
    console.log("WEEE I'm a ${this.type}");
  }
}

const wizard1 = new Wizard("Sheilly", "Healer");
const wizard2 = new Wizard("Shawn", "Abrakatabra");

// ES7
 // includes

 "Helloo".includes('o');

 const pets = ['cat', 'dog', 'monkey'];
 pets.includes('dog');

 // Exponential operator
 const square = (x) => x**2

 // ES8
 // strings padding
 'Turtle'.padStart(9);
 'Turtle'.padEnd(39);

// Trailing commas
const fun = (a,b,c,d,) => {
  console.log(a);
}

fun(1,2,3,4,)

// object.keys
let obj = {
  username0: 'Santa',
  username1: 'Rudolf',
  username2: 'Mr. Grinch'
}

Object.keys(obj).forEach((key, index) => {
  console.log(key, obj[key]);
})

// Object.values
Object.values(obj).forEach(value => {
  console.log(value);
})

// Object.entries
Object.entries(obj).forEach(value => {
  console.log(value);
})

Object.entries(obj).map(value => {
  return value[1] + value[0].replace('username', '');
})
