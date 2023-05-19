const basket = [ 'apples', 'oranges', 'grapes' ];
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000
};

//1
for( let i = 0; i < basket.length; i++ ) {
  console.log( basket[ i ] );
}

//2
basket.forEach( item => {
  console.log( item );
} );

for( item in detailedBasket ) {
  console.log( item );
}

for( item of basket ) {
  console.log( item );
}

// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// Use at least 3 different types of javascript loops to write this:
const array = [ -1, 0, 3, 100, 99, 2, 99 ]; // should return 100
const array2 = [ 'a', 3, 4, 2 ]; // should return 4
const array3 = []; // should return 0
console.log( biggestNumberInArray( array3 ) );

function biggestNumberInArray( arr ) {
  let biggest = 0;
  for( let i = 0; i < arr.length; i++ ) {
    biggest = ( biggest > arr[ i ] ? biggest : arr[ i ] );
  }
  return biggest;
}

function biggestNumberInArray2( arr ) {
  let biggest = 0;
  for( item of arr ) {
    biggest = ( biggest > item ? biggest : item );
  }
  return biggest;
}

function biggestNumberInArray3( arr ) {
  let biggest = 0;
  arr.forEach( item => {
    biggest = ( biggest > item ? biggest : item );
  } );
  return biggest;
}


// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100
};

function checkBasket( basket, lookingFor ) {
  let inBasket = "No";
  for( item in basket ) {
    if( item === lookingFor ) { inBasket = "Yes"; }
  }
  return inBasket;
}

