// includes() method

'Hellloooo'.includes( 'o' ); //true 

const pets = [ 'cat', 'dog', 'bat' ];
pets.includes( 'dog' ); //true 
pets.includes( 'bird' ); //false 


// Exponential Function (**)
const square = ( x ) => x ** 2; // raises x to the power of 2 
const cube = ( x ) => x ** 3; // raises x to the power of 3


// String Padding (.padStart() and .padEnd())
'Turtle'.padStart( 10 ); // "    Turtle" => Adds any needed spaces to ensure 10 total characters (including string) before string starts.
'Turtle'.padEnd( 10 ); // 'Turtle    ' => 10 total characters but with spaces added at end of string
// used to align strings


// Trailing Commas
const fun = ( a, b, c, d, ) => console.log( a );

fun( 1, 2, 3, 4, ); //1

// made to make things cleaner and easier to read (in GitHub especially) for functions with long arg intakes
// ensures a function doesn't fail for trailing comma 

// const easy = (
//     a,
//     b,
//     c,
//     d,  <---- any changes to an arg will pop on GitHub
// ) => {
//     console.log(a);
// }


// Object.values, Object.entries (improves upon Object.keys)

let obj = {
    username0: "Santa",
    username1: "Rudolf",
    username2: "Mr. Grinch"
};

// Before ES8 used Object.keys which allowed for using iterating functions
Object.keys( obj ).forEach( ( key ) => {
    console.log( obj[ key ] );

} );
// Santa
// Rudolf
// Mr. Grinch

Object.values( obj ).forEach( value => console.log( value ) );
// Santa
// Rudolf
// Mr. Grinch
Object.entries( obj ).forEach( value => console.log( value ) ); // --> creates array 
// [ 'username0', 'Santa' ]
// [ 'username1', 'Rudolf' ]
// [ 'username2', 'Mr. Grinch' ]

Object.entries( obj ).map( value => {
    value[ 1 ] + value[ 0 ].replace( 'username', '' );
} ); // will return the usernames only as a new array with the number associated with their key 