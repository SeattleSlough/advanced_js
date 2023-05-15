const array = [ 1, 2, 10, 16 ];

//ForEach (iterable.forEach)
// multiply each element by some number
// forEach doesn't modify the original array so result needs to be added to new array
// forEach doesn't have an implied return and so multiple expressions can operate in the loop

const double = [];
const newArray = array.forEach( ( num ) => {
    double.push( num * 2 );
} );

console.log( double ); // [2, 4, 20, 32]

// MAP (iterable.map)
// map mutates the array unlike forEach which simply loops over the array w/out changing it 
// map ALWAYS has a return element
// if the map function doesn't use {}, the return in implied
const mapArray = array.map( ( num ) => num * 2 );

console.log( mapArray ); // [2, 4, 20, 32]


// FILTER  (iterable.filter)
// it returns ONLY and array with items that satisfy the logical condition
// as w/map, if there are no {}, return is implied (IOW, only works for single line of code)
const filterArray = array.filter( num => num > 5 );
console.log( filterArray ); // [10, 16]


// REDUCE (iterable.reduce)
// returns a number (not an array)
// takes two args: an accumulator and an item in the array
// the accumulator is the running total of the function and has its initial value set at the end of the function 
// const foo = iterable.reduce((acc, num) => acc + num, 0)
// as above, if no {}, return is implied

const reduceArray = array.reduce( ( acc, num ) => acc + num, 0 );
console.log( reduceArray );  // 29 : 0 (starting value) + 1 first item in array) = 1 + 2 = 3 + 10 = 13 + 16 = 29