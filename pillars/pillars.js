// Function Constructor
const four = new Function('num','return num')
four(3)
// calling a function inside another
function a(fn){
  fn()
}

a(function(){console.log('hi dear')});
// passing functions as values
function b(){
  return function c() {console.log('Okay Bye')}
}

b()()
// calling functions inside a loop construct
function a() {

}
for (let i = 0; i < 3; i++) {
	a()
}

function d(param=6) {
	return param
}

// 
function letAdam() {
  let array = []
  for (let j = 0; j < 100000; j++) {
    array.push(j)
  }
  return 'access granted to Adam'
}
letAdam()

function letEve() {
  let array = []
  for (let k = 0; k < 100000; k++) {
    array.push(k)
  }
  return 'access granted to Eve'
}
letEve()