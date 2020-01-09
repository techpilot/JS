throw new Error("oops")
// Error: .name, .message, .stack(shows where the error is)
const myError = new Error('ooo')
myError.name

function a() {
	const b = new Error('hey')
	return b
}

new SyntaxError
new ReferenceError

function fail() {
	try {
		console.log('this works :)')
		throw new Error('oooh! shit')
	} catch (error) {
		console.log('oopp')
	} finally {
		console.log('laslas!!')
		return 'returning fail'
	}
}


try {
	try {
		something();
	} catch (error) {
		throw new Error(error)
	}
} catch (error) {
	console.log('got it', error)
}

// Async Error Handling
Promise.resolve('asyncfail')
	.then(response => {
		Promise.resolve().then(() => {
			throw new Error('#1 fail')
		})
		return 5
	})
	.then(response => {
		console.log(response)
	})
	.catch(err => {
		throw new Error('@3')
	})
	.then(response => {
		console.log(response.message)
	})
	.catch(err => {
		console.log('final error')
	})



let func = async function () {
	try {
		await Promise.resolve('#1, oopsie')
		await Promise.reject('#2, oopsie')
	} catch (err) {
		console.log(err)
	}
	console.log('this shit still works?')
}
console.log(func())


class AuthenticateError extends Error {
	constructor(message) {
		super(message)
		this.name = 'authenticateError'
		this.favouriteSnack = 'grapes'
	}
}

class DatabaseError extends Error {
	constructor(message) {
		super(message)
		this.name = 'DatabaseError'
		this.message = 'grapes'
	}
}

class PermissionError extends Error {
	constructor(message) {
		super(message)
		this.name = 'PermissionError'
		this.favouriteSnack = 'grapes'
	}
}

const aPlus = new authenticateError('oopsie')
aPlus.favouriteSnack