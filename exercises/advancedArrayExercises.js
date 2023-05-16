// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: [ "ball", "book", "pen" ]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: [ "tape", "backpack", "pen" ]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: [ "ball", "eraser", "pen" ]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: [ "book", "pen" ]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const bangArray = [];
array.forEach( item => {
  bangArray.push( item.username + "!" );
} );

//Create an array using map that has all the usernames with a "? to each of the usernames
const queryArray = array.map( obj => obj.username + "?" );

//Filter the array to only include users who are on team: red
const redArray = array.filter( obj => obj.team === "red" );

//Find out the total score of all users using reduce
const totalScore = array.reduce( ( acc, obj ) => acc + obj.score, 0 );

// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [ 1, 2, 4, 5, 8, 9 ];
// const newArray = arrayNum.map( ( num, i ) => {
//   console.log( num, i );
//   alert( num );
//   return num * 2;
// } );
// i is index (element, index) are args
const pureArray = arrayNum.map( ( num, i ) => {
  num * 2;
} );

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.

//answer

const answer = array.map( user => {
  user.items = user.items.map( item => item + "!" );
} );

// I was close.  Had the map (user => user) and obj.item.map 
// what I missed was the reassignment of obj.items = obj.items.map 