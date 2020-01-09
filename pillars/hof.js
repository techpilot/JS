const giveAccessTo = (name)  => 
  'Access Granted to ' + name

function letUserLogin(user) {
  let array = []
  for (let j = 0; j < 100000; j++) {
    array.push(j)
  }
  return giveAccessTo(user);
}

letUserLogin('Adams')

// higher order function example 1
const giveAccessTo = (name)  => 
  'Access Granted to ' + name

function authenticate(verify) {
  let array = []
  for (let j = 0; j < verify; j++) {
    array.push(j)
  }
  return true;
}

function letPerson(person, fn) {
  if (person.level === 'admin') {
    fn(500000)
  } else if (person.level === 'user') {
    fn(10000)
  }
  return giveAccessTo(person.name)
}

letPerson({level: 'admin', name: 'Wale'}, authenticate)

// example 2
function sing(person) {
  return 'lalalala my name is ' + person.name;
}

function letPerson(person, fn) {
  if (person.level === 'admin') {
    return fn(person)
  } else if (person.level === 'user') {
    return fn(person)
  }
}

letPerson({level: 'user', name: 'Soyinka'}, sing)

// Generic number
const multiply = (num1) => (num2) => num1 * num2

const multiplyByTwo = multiply(2);
multiplyByTwo(3)