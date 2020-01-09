// Array
//var selectedColors = ['red', 'blue'];
//selectedColors.push('purple', 'man', 2, 6, 'guy');
//selectedColors[2] = 1;
//console.log(selectedColors.reverse());

//function greet(name, lastName) {
//    console.log('Hello, ' + name + ' ' + lastName);
//}

//function square(number) {
//    return number * number;
//}

// console.log(square(1000035356));

//  console.log(selectedColors.length);

//for (var i = 0; i < 10; i++) {
//    console.log(i);
//}

//i = 0
//while (i < 10) {
//    console.log(i)
//S}

// let person = {
//    name: 'Steve',
//    age: 20
//};

// Dot Notation
// person.name = 'John';

// Bracket Notation
// let selection = 'name';
// person[selection] = 'Mary';

// console.log(person.name);

// Literal object
var person = {
    firstName: "Stephen",
    lastName: "Ngwu",
    age: 20,
    family: ['parents', 'brother'],
    address: {
        street: 'something else str',
        city: 'elsewhere',
        state: 'Hmm'
    },
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

console.log(person.fullName())
alert("JavaScript is fun")

// Object constructor
var apple = new Object();
apple.color = 'grreen';
apple.shape = 'round';

apple.describe = function () {
    return 'An apple has the color and shape of' + " " + this.color + " " + 'and' + " " + this.shape;
}

console.log(apple.describe());

function Fruit(name, color, shape) {
    this.name = name;
    this.color = color;
    this.shape = shape;
}

var apple = new Fruit('apple', 'red', 'round');
var banana = new Fruit('banana', 'green', 'finger')

console.log(apple);
console.log(banana);
