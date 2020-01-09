// Compose: obvious data transformation
const compose = (f, g) => (data) => f(g(data))
const multiplyBy3 = (num) => num*3
const makePositive = (num) => Math.abs(num);
const multiplyBy = compose(multiplyBy3, makePositive)

// console.log(multiplyBy(-50))


// Pipe: is simply a composed func that is reordered
const pipe = (f, g) => (data) => g(f(data))
const multiplyBy5 = (num) => num*5
const madePositive = (num) => Math.abs(num);
const multipliedBy = compose(multiplyBy5, madePositive)

console.log(multipliedBy(-50))

// arity: number of arguments a function takes

