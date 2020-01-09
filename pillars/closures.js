function a() {
	let grandpa = 'grandpa'
	return function b() {
		let father = 'father'
		return function c() {
			let son = 'son'
			return `${grandpa} > ${father} > ${son}`
		}
	}
}
// a()()()

const boo = (string) => (name) => (name2) =>
	console.log(`${string} ${name} ${name2}`)

// boo()()()

function callMeMayBe() {
	setTimeout(function () {
		console.log(callMe);
	}, 4000)
	const callMe = 'Hey am here!'
}

// callMeMayBe();

// Memory Efficient
function heavyDuty(index) {
	const bigArray = new Array(7000).fill('memes')
	console.log('created')
	return bigArray[index]
}

// heavyDuty(688)
// heavyDuty(688)
// heavyDuty(688)
// const getHeavy = heavyDuty2();
// getHeavy(123)
// getHeavy(567)
// getHeavy(890)

function heavyDuty2() {
	const bigArray = new Array(7000).fill('memes')
	console.log('created Again')
	return function (index) {
		return bigArray[index]
	}
}

// Encapsulation
const makeNuclearButton = () => {
	let timeWithoutDestruction = 0;
	const passTime = () => timeWithoutDestruction++;
	const totalPeaceTime = () => timeWithoutDestruction;
	const launch = () => {
		timeWithoutDestruction = -1;
		return 'bum'
	}
	setInterval(passTime, 1000)
	return {
		launch: launch,
		totalPeaceTime: totalPeaceTime
	}
}
// const ohno = makeNuclearButton()
// ohno.totalPeaceTime()


let view;
function initialize() {
	let called = 0;
	return function () {
		if (called > 0) {
			return;
		} else {
			view = 'yiu';
			called++;
			console.log('view has been set!')
		}
	}
}

const startOnce = initialize();
// startOnce();
// startOnce();
// startOnce();
// startOnce();
// startOnce();
// console.log(view);


// var displays the index length, let displays the inidices cos
// it allows us to use block scoping
const array = [1, 3, 5, 7, 9]
for (let i = 0; i < array.length; i++) {
	setTimeout(function () {
		console.log('I am at index ' + array[i])
	}, 3000)
}

// But with var and asap invoked function, the indices can be displayed
for (var i = 0; i < array.length; i++) {
	(function (closureI) {
		setTimeout(function () {
			console.log('I am at index ' + array[closureI])
		}, 3000)
	})(i)
}
console.log('---------------------')

