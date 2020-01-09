// "this" is the object that something is property of
// "this" in obj means that the sing function is a property of 'obj'
// 1: "this" gives methods access to their object
const obj = {
  name: 'Billy',
  sing() {
    return 'lalala' + this.name;
  },
  singAgain() {
    return this.sing() + '!';
  }
}
obj.sing();

// 2: "this" execute same code for multiple objects
function importantPerson() {
  console.log(this.name);
}
const name = 'Sunny'
const objd = {
  name: 'Cassie',
  importantPerson: importantPerson
}
const objf = {
  name: 'Lior',
  importantPerson: importantPerson
}


const a = function() {
  console.log('a', this);
  const b = function() {
    console.log('b', this);
    const c = {
      hi() {
        console.log('c', this);
      }
    }
    c.hi();
  }
  b();
}
a();

// Dynamic Scope
const object = {
  name: "Chris",
  sing() {
    console.log('a', this);
    var another = function() {
      console.log('b', this);
    }
    another();
  }
}
// Result
// object.sing();
// a {name: "Chris", sing: ƒ}
// b Window {parent: Window, postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, …}
// Because of the dynamic scope 'b' has a window scope instead of sing function
// Arrow function is gonna be used to tackle this issue or bind or initializing "this" to "self" variable.

const object = {
  name: "Chris",
  sing() {
    console.log('a', this);
    var another = () => {
      console.log('b', this);
    }
    another();
  }
}
object.sing();

const object = {
  name: "Chris",
  sing() {
    console.log('a', this);
    var anotherFunc = function() {
      console.log('b', this);
    }
    return anotherFunc.bind(this);
  }
}


// Call and Apply
const wizard = {
  name: 'Merlin',
  health: 100,
  heal(num1, num2) {
    return this.health += num1 + num2;
  }
}
const archer = {
  name: 'Robin Hood',
  health: 30
}
console.log('call 1', archer);
wizard.heal.call(archer, 50, 30);  // or wizard.heal.appy(archer, [50, 30])
console.log('call 2', archer);

// Bind- calls a function later on with a certain keyword.
console.log('bind 1', archer);
const healArcher = wizard.heal.bind(archer, 50, 30);
healArcher();
console.log('bind 2', archer);


// function currying with Bind
function multiply(a,b) {
  return a*b;
}

let multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(4));


var b = {
  name: 'jay',
  say() {console.log(this);}
}

var c = {
  name: 'jay',
  say() {return function() {console.log(this);}} //here this gets bound to windows, cos this normally is globally scoped
}

var d = {
  name: 'jay',
  say() {return () => console.log(this)} // "this" is bound to the object "d" cos arrow funcs are lexically scoped
}
