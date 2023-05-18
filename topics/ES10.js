// .flat()

const array = [ 1, [ 2, 3 ], 4, 5 ];

console.log( array.flat() ); // [1,2,3,4,5]

const array2 = [ 1, 2, [ 3, 4, [ 5 ] ] ];
console.log( array2.flat() ); // [1,2,3,4,Array1]
console.log( array2.flat( 2 ) ); // [1,2,3,4,5]

//.flat() takes a numeric input to define the depth of the recursive flattening

const entries = [ 'bob', 'sally', , , , , , , , , 'cindy' ];
console.log( entries.flat() ); // ['bob', 'sally', 'cindy']


//.flapMap()
// uses flat() and map() on an array
// array is result is flattened



//.trimStart(), .trimEnd()
const userEmail = '                   eddytheeagle@gmail.com';
const userEmail2 = 'johnnydangerously@gmail.com                    ';

console.log( userEmail.trimStart() ); // removes all initial white space
console.log( userEmail2.trimEnd() ); // removes all trailing white space 


// fromEntries 
// formats a list of key:value pairs into an object 
// Syntax = Object.fromEntries(array)

const userProfiles = [ [ 'commanderTom', 23 ], [ 'dererkZlander', 40 ], [ 'hansel', 18 ] ];
console.log( Object.fromEntries( userProfiles ) ); // { commanderTom: 23, dererkZlander: 40, hansel: 18 }



// try-catch block 

try {
    4 + 5;
} catch( error ) {
    console.log( 'there is an error in the code' );
}

// 9 

try {
    true + {};
} catch( error ) {
    console.log( 'there is an error in the code' );
}