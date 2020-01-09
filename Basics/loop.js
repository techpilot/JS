var todos = [
  "clean room",
  "brush teeth",
  "exercise",
  "JavaScript",
  "eat"
];

var todoed = [
  "cleaned!",
  "brushed!",
  "exercised!",
  "JavaScript!",
  "ate!"
];

// var todoLength = todos.length
// for (var i=0; i < todoLength; i++) {
//  console.log();
// }

function logTodos(todo, i) {
  console.log(todo, i);
}

todos.forEach(logTodos);
todoed.forEach(logTodos);

// var countOne = 10;
// while (countOne > 0) {
//   console.log(countOne);
// countOne--;
// }

// var countTwo = 10;
// do {
//   console.log(countTwo);
//   countTwo--;
// } while (countTwo > 0);

// Advanced loop
const basket = ['apples', 'oranges', 'oranges'];  // arrays and strings are iterable

const detailBasket = {
  apples: 5,
  oranges: 10,
  grapes: 9
}                          // objects are enumerable

// forEach
basket.forEach(item => {
  console.log('forEach', item);
})

// for of
for(item of basket) {
  console.log('for of', item);
}

// for in
for(item in detailBasket) {
  console.log(item);
}


// for(item in basket) {
//   console.log(item);
// }
// 0
// 1
// 2
// using a for in with an array, sees the array as an object and displays the index as the property
