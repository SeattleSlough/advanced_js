
// PROBLEM #1: Organizing items within an array

// write a function arrayOrganizer that takes an array as an argument and returns and that array organized as follows:
// - segregated by type (numbers vs strings), each within its own array within the array returned [[numbers][strings]] 
// - Using the following hierarchy:
//      - numbers: ascending order
//      - strings: alphabetical (a --> z)
// - all equal items are grouped into an array ([1, [2,2,2], 17,18...)

const array = [ 1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20 ];

// Thoughts...
// The returned array needs to be created within the function 
// Sort the array to avoid having to check values after any grouping (question: how sort() in num v str?)
//  - ANSWER:sort() on numbers and letters works for not mixing up the two types
// Find a way to create an array of like elements

const simpleArray = [ 1, 1, 1, 2, 3, 3, 4 ];

const test = ( data ) => {
    let output = [];
    data.forEach( ( item, i ) => {
        if( item === data[ i + 1 ] ) {
            debugger;
            output.push( data.filter( duplicate => duplicate === item ) );
        } else {
            output.push( item );
        }
    } );
    return output;
};
console.log( test( simpleArray ) );





const arrayOrganizer = ( array ) => { };
