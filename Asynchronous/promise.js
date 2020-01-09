const urls = [
	'https://jsonplaceholder.typicode.com/users',
	'https://jsonplaceholder.typicode.com/posts',
	'https://jsonplaceholder.typicode.com/albums',
]

Promise.all(urls.map(url => {
	return fetch(url).then(resp => resp.json())
})).then(results => {
	console.log(results[0])
	console.log(results[1])
	console.log(results[2])
}).catch(() => console.log('error!'))


// Promise is an obj that produce a single value some time in the future
// it has three states: fulfilled, rejected and pending
const promise = new Promise((resolve, reject) => {
	if(true) {
		resolve('Stuff worked out')
	} else {
		reject('Error, it broke')
	}
})

const promise2 = new Promise((resolve, reject) => {
	setTimeout(resolve, 100, 'hii')
})

const promise3 = new Promise((resolve, reject) => {
	setTimeout(resolve, 1000, 'pook')
})

const promise4 = new Promise((resolve, reject) => {
	setTimeout(resolve, 3000, 'nah mee?')
})

Promise.all([promise, promise2, promise3, promise4])
	.then(values => {
		console.log(values);
	})

promise
	.then(result => result + '!')
	.then(result2 => result2 + '?')
	.catch(() => console.log('Error!'))
	.then(result3 => {
		console.log(result3 + '!')
	})



// promise
// 	.then(result => { 
// 		throw Error
// 		result + '!'
// 	})
// 	.then(result2 => {
// 		console.log(result2);
// 	})
// 	.catch(() => console.log('Error'))



// movePlayer(100, 'left', function() {
// 	movePlayer(400, 'left', function {
// 		movePlayer(10, 'Right', function {
// 			movePlayer(330, 'Right', function {
// 			})
// 		})
// 	})
// })

// // Promise
// movePlayer(100, 'left')
// 	.then(() => movePlayer(400, 'left'))
// 	.then(() => movePlayer(10, 'Right'))
// 	.then(() => movePlayer(400, 'Right'))



// Callback Queue - Task Queue
setTimeout(() => {console.log('1', 'is the loneliest')}, 0)
setTimeout(() => {console.log('2', 'be bad as well')}, 10)

// Job Queue - Microtask Queue
Promise.resolve('hi').then((data) => console.log('2', data))

console.log('3', 'is a crowd');