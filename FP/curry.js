// currying: getting a fn that takes multiple parameters & it take a parameter at a time
const multiply = (a, b) => a*b;
const curriedMultiply = (a) => (b) => a*b;
const curriedMultiplyBy5 = curriedMultiply(5);

// console.log(curriedMultiplyBy5(22))

// Partial Application:a fn with smlr parameters, accepts 1 aat ist call then takes other remaining parametrs on a 2nd call
const multiplied = (a, b, c) => a*b*c;
const partialMultiply5 = multiplied.bind(null, 5);

console.log(partialMultiply5(6,11))

// Caching is a way of storing values for later use
// Memorization is a way to remember a solution to a cell probs so that the same probs won't be calculated again
function addTo(n) {
	console.log('Very long time')
	return n + 80;
}

function memorizedAddTo() {
	let cache ={}
	return function(n) {
		if (n in cache) {
			return cache[n];
		} else {
			console.log('Very long time')
			cache[n] = n + 80;
			return cache[n];
		}
	}
}

const memoized = memorizedAddTo();

console.log('1', memoized(5));
console.log('2', memoized(5));