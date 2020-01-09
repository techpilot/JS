// let & const

const palyer = 'bobby' //constant
let experience = 100;
let wizardLevel = false;

console.log("before", wizardLevel);
if (experience > 90) {
  let wizardLevel = true;
  console.log("inside", wizardLevel);
}

console.log("outside", wizardLevel);

// console.log("before", wizardLevel);
// if (experience > 90) {
//   var wizardLevel = true;
//   console.log("inside", wizardLevel);
// }
//
// console.log("outside", wizardLevel);


// Destructuring
// const obj = {
//   player: 'bobby',
//   experience: 100,
//   wizardLevel: false
// }
//
// const player = obj.player;
// const experience = obj.experience;
// let wizardLevel = obj.wizardLevel;
//
// const {player, experience} = obj;
// let {wizardLevel} = obj;

const name = 'john snow';
const objd {
  [name]: 'hello',
  [1 + 2]: 'hihi'
}
console.log(objd);

// Template strings
// const name = "Sally";
// const age = 34;
// const pet = "puppy";

// const greet = "hello " + name + " you seem to be " + age +
// const greetBest = `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have.`;

// default arguments        |       |
// function greet(name=" ", age=30, pet="cat") {
  // return `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have.`;
// }


// Symbol

let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');

// arrow functions
const add = (a, b) => a + b;

const add2 = (a, b) => {
  console.log(a - b);
  console.log(a + b);
}
