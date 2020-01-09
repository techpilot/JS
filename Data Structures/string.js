function reverse(str) {
	// input check
	if (!str || str.length < 2 || typeof str !=='string') {
		return 'thats an empty stuff'
	}

	const backwards = [];
	const totalItems = str.length - 1;
	for(let i = totalItems; i >= 0; i--){
		backwards.push(str[i]);
	}
	console.log(backwards)
	return backwards.join('')
}


// reversing with built in functions 
function reversed(str) {
	return str.split('').reverse().join('')
}

// arrow functions
const reverse3 = str => str.split('').reverse().join('');
console.log(reverse3('Hey there, how are you doing'))

// spread operator
const reverse4 = str => [...str].reverse().join('');
console.log(reverse4("what's up"))