// Solve the below problems:


// #1) Check if this array includes the name "John".
const dragons = [ 'Tim', 'Johnathan', 'Sandy', 'Sarah' ]; //false


// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons = [ 'Tim', 'Johnathan', 'Sandy', 'Sarah' ];

const includesJohn = dragons.filter( item => item.includes( 'John' ) );



// #3) Create a function that calculates the power of 100 of a number entered as a parameter

const exp100 = ( base ) => base ** 100;


// #4) Using your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result
const exp100 = ( 10000 ); //Infinity
// JS is 32 bit so this number maxes out what it can hold (Python is 64 bit and can process this function)


// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

turtle = turtle.padStart( 9 );
rabbit = rabbit.padStart( 9 );

// it should look like this:
'     ||<- Start line';
'       🐢';
'       🐇';

// when you do:
console.log( startLine );
console.log( turtle );
console.log( rabbit );


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd( 9, '=' );

// the second argument replaces white space with the passed input


// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
};
// to this:
'my name is Rudolf the raindeer';

( Object.entries( obj ).toString() ).replaceAll( ',', ' ' );