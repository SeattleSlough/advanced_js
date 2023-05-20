// One key new feature from ES2021
// replaceAll()

const str = 'ztm is the best of the best';

const b = str.replaceAll( "best", 'worst' ); // replaceAll() won't modify existing string


// ES2022 
// .at() 

const arr = [ 100, 200, 400, 50000, 10 ];

// if asked to get the item right before the last entry you could...

let oldAns = arr[ arr.length - 2 ]; // because index starts at 0, not 1 (last item is -1)

console.log( oldAns );

let newAns = arr.at( -2 );
console.log( newAns );

// Async Await is in this release as well but we need to learn something else before diving into that 

