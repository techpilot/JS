// 	HOF
const hof = (fn) => (5);
console.log(hof(function a(x){return x}))

// Closure
const closure = function() {
	let count = 0;
	return function increment() {
		count++;  // modifies closure func cos of the increment, we're not returning a value from count.
		return count;
	}
}
const incrementFn = closure();
console.log(incrementFn())


function notGood() {
	return Math.random()
}

notGood()

// indempotence: ability for a code to return the same output, no matter how many times it's called
Math.abs(-50)

// Imperative: tells computer what to do and how to do it
for (let i = 0; i < 100; i++) {
	i
}
// Declarative: tells the system what to do but not how to do it
[1,2,3].forEach(item => item)

// immutability: not changing state but making copies of it and returning a new state
const obj = {name: 'Andrei'}
function clone(obj) {
	return {...obj}; 
}

function updatedName(obj) {
	const obj2 = clone(obj);
	obj2.name = 'Nana'
	return obj2
}
// const updateObj = updatedName(obj)
// console.log(obj, updateObj)\


// pure functions with no side effects using ".concat", "return", ".map"
const array = [1,2,3]
function removeLast(arr) {
	const newArray = [].concat(arr)  // concat saves "newArray" as an totally independent array
	newArray.pop()
	return newArray
}

function multiplyBy2(arr) {
	return arr.map(item => item*2)
}

// console.log(removeLast(array))
// console.log(multiplyBy2(array))
// console.log(array)

