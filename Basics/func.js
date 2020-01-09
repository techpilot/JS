//var sayBye = function() {
//  console.log("Bye");
//}
//sayBye();

//function sayHello(hello) {
//  console.log(hello);
//}

function multiply(a, b) {
  if (a > 10 || b > 10) {
    return "too much";
  } else {
    return a*b;
  }
}
//multiply

var functionApple = [function apple() {
   console.log("I love Mac OS")
}, function windows() {
   console.log("Windows OS");
}]

var mixedList = ["apples", 1, undefined, true, function solaris() {
  console.log("solaris OS");
}]

var ani = [
  ["tiger", "cat", "lion", "cheetah", "leopard"],
  ["wolf", "eagle", "bear", "whale", "elephant"]
]
//console.log(ani[0][3]);

var list = ["tiger", "cat", "bear", "bird"];
var mo_v = list.shift(); //removes 1st array obj
var po_p = list.pop(); //removes last array obj

//console.log(list.push("elephant")); //adds an obj
var myAni = list.concat(["bee", "deer"], ["dog", "python"]); //adds an array to the main array
list.sort(); //alphabetical order

//Objects
var user = {
  name: "John",
  age: "27",
  hobby: "soccer",
  isMarried: true
}

user.shout = function() {
    console.log("AHHHHHH");
}

user.name
user.age
user.isMarried = "divorced"        //change obj property
user.favFood = "apple"          //add item to an Object
user.spells = ["abrakada", "shazam", "skidush"]            //inserting array inside an obj
user.spells[2]              //accessing a list item in an Object

var userList = [
  {
    username: "Lior",
    passwd: "mysecret"
  },
  {
    username: "Nancy",
    passwd: "thatwas"
  }
];  //object inside an array
userList[0].passwd

var emptyObj = {}
var nullObj = null

var b = "I accessed this";
function bb() {
  b = "hello";
}

// root scope
var fun = 5;

function funFuct() {
  // child scope
  var fun = "helloo";
  console.log(1, fun);
}

function funerFuct() {
  // child scope
  var fun = "Byee";
  console.log(2, fun);
}

function funestFuct() {
  // child scope
  fun = "Okay";
  console.log(3, fun);
}

console.log("window", fun);
funFuct();
funerFuct();
funestFuct();

// arrow functions
const add = (a, b) => a + b;

const add2 = (a, b) => {
  console.log(a - b);
  console.log(a + b);
}
