const promisfy = ( item, delay ) =>
	new Promise((resolve) =>
		setTimeout(() =>
			resolve(item), delay));

const a = () => promisfy('a', 100);
const b = () => promisfy('b', 5000);
const c = () => promisfy('c', 3000);

// console.log(a(),b(),c())

// Parallel: outputing all the promises once
async function parallel() {
	const promises = [a(), b(), c()];
	const [output1, output2, output3] = await Promise.all(promises);
	return `parallel is done: ${output1} ${output2} ${output3}`
}


// Race: returns which ever comes first and then stops
async function race() {
	const promised = [a(), b(), c()];
	const outputOne = await Promise.race(promised);
	return `race is done: ${outputOne}`;
}


// Sequence
async function sequence() {
	const outOne = await a();
	const outTwo = await b();
	const outThree = await c();
	return `sequence is done: ${outOne} ${outTwo} ${outThree}`
}

console.log(sequence().then(data => console.log(data)))
console.log(parallel().then(console.log))
console.log(race().then(console.log))



// WEB WORKER: a js code running on a different thread
var worker = new Worker('worker.js')
worker.postMessage('Helloo')
addEventListener('message')

// const {spawn} = require('child_process')
// console.log(spawn('git', ['stuff']))