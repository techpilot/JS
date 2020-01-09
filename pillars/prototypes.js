const a = () => ''
a.__proto__
a.__proto__.__proto__

let dragon = {
	name: 'Tanya',
	fire: true,
	fight() {
		return 5
	},
	sing() {
		if (this.fire) {
			return `I am ${this.name} the breather of fire`
		}
	}
}

// console.log(dragon.sing())

let lizard = {
	name: 'Kiki',
	fight() {
		return 1
	}
}

// const singLizard = dragon.sing.bind(lizard)
// singLizard()

// using prototypal inheritance to inherit all the dragon's methods that not in lizard
lizard.__proto__ = dragon;
// console.log(lizard.fight())

// checks if dragon is a prototype of lizard
// console.log(dragon.isPrototypeOf(lizard))

// displays only the properties of lizard
for (let prop in lizard) {
	if (lizard.hasOwnProperty(prop)) {
		prop
	}
}

// objects, functions and arrays uses prototypal to inherit from the base object
// __proto__ points to the prototype object

// base function
Function.prototype
// base array
Array.prototype
// base global object
Object.prototype


let human = {
	mortal: true
}

// beta way of creating prototypal inheritance
let socrates = Object.create(human)
socrates.age = 45	
typeof Object 

 
// prototype on dates
// does not work with arrow functions cos "this" is lexically scoped
Date.prototype.lastYear = function() {
	return this.getFullYear() - 1
}
console.log(new Date().lastYear())

// overwriting "map" property of prototypal inheritance
Array.prototype.map = function() {
	let arr = [];
	for(let i = 0; i < this.length; i++) {
		arr.push((this[i] + 'wap'))
	}
	return arr
}

console.log([1,2,3].map())
