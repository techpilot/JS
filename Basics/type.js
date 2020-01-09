typeof 5
// checks if the given parameter is an array
Array.isArray()
// converts sth to string
true.toString()

// pass by value
var a = 5;
var b = 10;

var b = a;

// pass by refernce
let obj1 = {name: 'Steve', passwords: 'anytin'}
let obj2 = obj1
obj2.passwords = 'easypeasy'

console.log(obj1)
console.log(obj2)

var c = [1,2,3,4,5];
var d = c;
d.push(18274);

// implementing pass by value with objs and arrays.
var d = [].concat(c); 
let clone = Object.assign({}, obj1);
let clone2 = {...obj1} // spread operator

let obj = {
	a: 'a'
	b: 'b'
	c: {
		deep: "that's me"
	}
}
let objt = {...obj} //shallow cloning
let superClone = JSON.parse(JSON.stringify(obj))

// Type coercion
1 == '1'
if (1) {
	console.log(5)
}

-0 === +0
Object.is(-0,+0);

// Weakly typed lang
var a = "Booyaa"
a + 17