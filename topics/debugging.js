const flattened = [ [ 0, 1 ], [ 2, 3 ], [ 4, 5 ] ].reduce( ( a, b ) => a.concat( b ), [] );

// working through the problem to understand this code 
// renaming so I can show comparison for purposes of future reference value of notes 
const flattenedCopy = [ [ 0, 1 ], [ 2, 3 ], [ 4, 5 ] ].reduce( ( accumulator, array ) => accumulator.concat( array ), [] );

// simplifying further..we know the accumulator is going to start out as an empty array and will be concatted with arrays
// let's open up the function so we can more easily insert console.log() tracking; 

const openedCopy = [ [ 0, 1 ], [ 2, 3 ], [ 4, 5 ] ].reduce( ( acc, array ) => {
    console.log( 'array', array );
    console.log( 'accumulator', acc );
    return acc.concat( array ); //need to return once taken off a single line of arrow function
    // first loop of code is effectively [].concat([0,1])
    // second loop is [0,1].concat([2,3])
    // final loop is [0,1,2,3].concat([4,5]) 
    // clearly the code is flattening the array against which reduce is being executed
}, [] );
console.log( openedCopy );

// can also use the 'debugger' keyword 

const debuggerCopy = [ [ 0, 1 ], [ 2, 3 ], [ 4, 5 ] ].reduce( ( acc, array ) => {
    debugger;
    return acc.concat( array );
}, [] );
