var database = [
  {
    username: "Lior",
    password: "mysecret"
  },
  {
    username: "Steve",
    password: "419666"
  },
  {
    username: "Chris",
    password: "christ"
  }
];

var newsFeed = [
  {
    username: "Stephen",
    timeline: "love of God"
  },
  {
    username: "Chris",
    timeline: "on God"
  }
];

function isUserValid(username, password) {
  for (var i=0; i < database.length; i++) {
    if (database[i].username == username &&
    database[i].password == password) {
      return true;
    }
  }
  return false;
}

function signIn(username, password) {
  if (isUserValid(username, password)) {
      console.log(newsFeed);
    } else {
      alert("incorrect username or password!");
    }
  }

var userNamePrompt = prompt("what's your username?");
var passwordPrompt = prompt("what's your password?");

signIn(userNamePrompt, passwordPrompt);
