var array = [ 1, 2, 10, 16 ];

//ForEach
// multiply each element by some number

const double = [];
const newArray = array.forEach( ( num ) => {
    double.push( num * 2 ); //forEach doesn't modify the original array so result needs to be added to new array
} );

newArray()
console.log( double );