// factory functions
function createElf(name, weapon) {
	return {
		name,
		weapon,
		attack() {
			return name + ' attacks with ' + weapon
		}
	}
}


// Object.create()
const elfStore = {
	attack() {
		return this.name + ' attacks with ' + this.weapon
	}
}

function createdElf(name, weapon) {
	let newElf = Object.create(elfStore)
	newElf.name = name;
	newElf.weapon = weapon;
	return newElf;
	
}

// const david = createdElf('David', 'stones');
// console.log(david.attack())

// Built in constructor function
const Elf1 = Function('name', 'weapon', `this.name = name; this.weapon = weapon;`)
const sarah = new Elf1('sarah', 'fireworks')
sarah

Elf.prototype.build = function() {
	const self = this
	function building() {
		return self.name + ' builds a house';
	}
	return building()    //.bind(this)
}
const david = new Elf('Dave', 'Catapult')
console.log(david.build())

// Constructor Functions
function Elf(name, weapon) {
	this.name = name;
	this.weapon = weapon;
	// console.log('this is', this)
}

Elf.prototype.attack = function() {
	return this.name + ' attacked Goliath with ' + this.weapon
}
