// Topics Covered
// 1) BigInt
// 2) Nullish Coalescing Operator ??
// 3) Optional Chaining Operator ?.

// TOPIC: BigInt
// New type that solves calc problems with big numbers 
// Syntax: append to end of number ( 2 --> 2n) or BigInx(x)
// BigInt numbers can only be used with other BigInt numbers (5 + 3n will not work)

typeof BigInt;

console.log( typeof 4 );
console.log( typeof true );
console.log( typeof 12n );

// Max Safe Number past which calculations break down
// this is due to JS using a double-precision floating point format for numbers
// memory can only hold so much 

let num = Number.MAX_SAFE_INTEGER;

console.log( num );
console.log( num + 1 );
console.log( num + 10 ); // calc breaks
console.log( BigInt( num ) + 10n );


// TOPIC: Optional Chaining Operator 
let will_pokemon = {
    pikachu: {
        species: 'Mouse Pokemon',
        height: 0.4,
        weight: 6
    }
};

let andrei_pokemon = {
    raichu: {
        species: 'Mouse Pokemon',
        height: 0.8,
        weight: 30
    }
};

let weight = will_pokemon.pikachu.weight;
console.log( weight );

let raichu_weight = will_pokemon.pikachu.weight;

// let weight2 = andrei_pokemon.pikachu.weight;
// console.log( weight ); 
// errors out as andrei_pokemon doesn't have pikachu object 

// to solve in past 
if( andrei_pokemon.pikachu && andrei_pokemon.pikachu.weight ) {
    let weight2 = andrei_pokemon.pikachu.weight;
    console.log( weight2 );
} else {
    let weight2 = undefined;
    console.log( weight2 );
}

// Now this is done with Optional Chaining...

let weight3 = andrei_pokemon?.pikachu?.weight;
console.log( weight3 );

andrei_pokemon.pikachu = will_pokemon.pikachu;

weight3 = andrei_pokemon?.pikachu?.weight;
console.log( weight3 );