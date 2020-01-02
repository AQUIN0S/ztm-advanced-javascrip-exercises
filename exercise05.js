// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

console.log("Initial array", array);

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const forArray = [];
array.forEach(user => {
  let { username } = user;
  username = username + "!";
  forArray.push(username);
});

console.log("Initial array", array);
console.log("forEach array", forArray);

//Create an array using map that has all the usernames with a "? to each of the usernames
const mapArray = array.map(user => user.username + "?");

console.log("Initial array", array);
console.log("map array", mapArray);

//Filter the array to only include users who are on team: red
const filterArray = array.filter(user => user.team === "red");

console.log("Initial array", array);
console.log("filter array", filterArray);

//Find out the total score of all users using reduce
const totalScore = array.reduce((accumulator, user) => accumulator + user.score, 0);

console.log("Initial array", array);
console.log("Total Score", totalScore);

// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	return {
	  index: i,
	  value: num * 2
    };
});

console.log("Initial array", array);
console.log("Second map", newArray);

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
// This is the solution provided. HOWEVER!!! Be aware that this does affect the original array as well.
// const bonusArray = array.map(user => {
//   user.items = user.items.map(item => {
//     return item + "!"
//   });
//   return user;
// });

/*
 * This is a better way of doing it. It will leave the original array mostly alone, and create a "true"
 * copy of the array. This means that changing bonusArray will not change the initial array.
 *
 * A side note, this method is not comprehensive. It works because the basic building blocks of this
 * object are either numbers or strings, which are immutable. Each member of the objects points to
 * a basic type, which the initial object's member also points to. However this cannot be changed,
 * so changing an object's member will force it to create a new reference, so we're good!
 *
 * PPS: Same with the item array elements.
 */
const bonusArray = array.map(user => {
  return {
    username: user.username,
    team: user.team,
    score: user.score,
    items: user.items.slice().map(item => item + "!")
  };
});

console.log("Initial array", array);
console.log("Bonus Array", bonusArray);
