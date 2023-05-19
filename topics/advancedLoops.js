const basket = [ 'apples', 'oranges', 'grapes' ];

//standard for loop 
for( let i = 0; i < basket.length; i++ ) {
    console.log( basket[ i ] );
}

//forEach 
basket.forEach( item => console.log( item ) );


// for of 
// Meant for ARRAYS
// This is ITERATING 

for( item of basket ) {
    console.log( item );
}

for( item of 'string' ) {
    console.log( item );
}

// for in 
// Works with objects {}
// We can see the object properties
// We are NOT iterating...this is ENUMERATING because properties in JS are enumerable

const detailedBasket = {
    apples: 5,
    oranges: 10,
    grapes: 1000
};

for( item in detailedBasket ) {
    console.log( item );
}

for( item in basket ) {
    console.log( item );
}
// the index is the property of the object, here an Array