async function playerStart() {
	const firstMove = await movePlayer(100, 'left'); //pause
	const secondMove = await movePlayer(400, 'left'); //pause
	const thirdMove = await movePlayer(10, 'right'); //pause
	const forthMove = await movePlayer(330, 'left'); //pause
}

// Promise
fetch('https://jsonplaceholder.typecode.com/users')
	.then(resp => resp.json())
	.then(console.log)


// Async Await
async function fetchUsers() {
	const resp = await fetch('https://jsonplaceholder.typecode.com/users')
	const data = await resp.json()
	console.log(data)
}


const urls = [
	'https://jsonplaceholder.typicode.com/users',
	'https://jsonplaceholder.typicode.com/posts',
	'https://jsonplaceholder.typicode.com/albums',
]

// Promise
Promise.all(urls.map(url => 
	fetch(url).then(resp => resp.json())
)).then(results => {
	console.log(results[0])
	console.log(results[1])
	console.log(results[2])
}).catch(() => console.log('error!'))

// Async Await
const getData = async function() {
	try {
		const [ users, posts, albums ] = await Promise.all(urls.map(url => 
			fetch(url).then(resp => resp.json())
		))
		console.log(users)
		console.log(posts)
		console.log(albums)
	} catch(err) {
		console.log('ooops', err)
	}
}
console.log(getData())
