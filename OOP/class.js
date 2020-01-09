class Elf {
	constructor(name, weapon) {
		// instances held by the constructor
		this.name = name;
		this.weapon = weapon;
	}
	attack() {
		return this.name + ' attacks with ' + this.weapon
	}
}

// 'new' kwyword is used to instanciate the Elf class
const dave = new Elf('Dave', 'gun')
console.log(dave.attack())
console.log(dave instanceof Elf)
