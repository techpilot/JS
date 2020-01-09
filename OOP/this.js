// Ways of using "this" keyword
// new binding this
function Person(name, age) {
	this.name = name;
	this.age = age;
}

const person1 = new Person('Xavier', 55)
console.log(person1)

// implicit binding
const person = {
	name: 'Karim',
	age: 33,
	hey() {
		console.log('hi ' + this.name)
	}
}

// explicit binding uses call, bind and apply
// const person3 = {
// 	name: 'Karim',
// 	age: 33,
// 	hei: function() {
// 		console.log("what's " + this.setTimeout)
// 	}.bind(window)
// }

// Arrow functions make "this" to be lexically scoped
const person4 = {
	name: 'Chris',
	age: 12,
	hii: function() {
		var inner = () => {
			console.log('hi ' + this.name)
		}
		return inner()
	}
}

console.log(person4.hii())