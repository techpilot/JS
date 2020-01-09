// a();
// var a = () => console.log('hi');
// var a = () => console.log('bye');
//
// b();
// function b() {
// 	console.log('hii');
// }
// function b() {
// 	console.log('byee');
// }


var favoriteFood = 'grapes'

var foodThoughts = function() {
  console.log("My favourite food is " + favoriteFood);

  var favoriteFood = 'sushi';
  console.log("new favourite food is " + favoriteFood);
}

foodThoughts();
