// ECMAScript === Javascript;
// ES$ === ECMAScript version $;

//New Features Released in these updates

//Features are supported because of Babel so browser compat isn't a blocker


//VARIABLES: LET & CONST
// var is deprecated

// const player = 'bobby';
// let experience = 100;
// let wizardLevel = false;
// var wizardSkill = false;

// if( experience > 90 ) {
//     let wizardLevel = true;
//     console.log( 'inside', wizardLevel );  //true
// }

// if( experience > 90 ) {
//     var wizardSkill = true;
// }

// console.log( 'outside', wizardLevel );  // false
// console.log( wizardSkill );  // true

// let stays scoped within the curly braces if used w/in a function
// this means let can have a parent definition and another definition w/in any number of functions

// var can be redefined anywhere if it has a global scope

// player = "Sally"; //error as const cannot be reassigned

// this is useful for avoiding bugs created by teams changing variables that need to have a constant value
// best practice is to make all functions const

// const as an Object 
const obj = {
    player: 'bobby',
    experience: 100,
    wizardLevel: false
};

// obj = 5;  //error as the variable cannot be reassigned

obj.wizardLevel = true;
obj.newField = 12;  //can add values to an Object that is a const

console.log( obj.wizardLevel ); //true

//OBJECTS

// Destructuring
const { player, experience } = obj;  // same as const player = obj.player, const experience = obj.experience
let { wizardLevel } = obj; // same as let wizardLevel = obj.wizardLevel


//Object properties
const fullName = "john snow";

const obj2 = {
    [ fullName ]: 'hello', // [input] uses a defined variable to create a key
    [ 1 + 2 ]: 'hihi' // this executes an operation (1+2) to define the value
};

console.log( obj2 ); // {3: 'hihi', john snow: "hello"}

// structuring
const a = "Simon";
const b = true;
const c = {};

const obj3 = { a, b, c }; //creates the full object w/key:value pairs 
console.log( obj3 );

//TEMPLATE STRINGS (Literals)

`string ${ nonStringInput } more string`;
//No need to worry about escaping as back ticks don't conflict with single or double quotes

let person = "Sally";
let pet = "horse";
let age = 27;

const greetingBest = `Hello ${ person }, you seem to be ${ age = 10 }.  What a lovely ${ pet } you have.`;
// age is overridden because of let.
//using const age = x will override what is inside the String Literal

//DEFAULT ARGUMENTS
function greet( person = '', age = 30, pet = 'cat' ) {
    return `Hello ${ person }, you seem to be ${ age - 10 }.  What a lovely ${ pet } you have.`;
}

//SYMBOL
let sym1 = Symbol();
let sym2 = Symbol( 'foo' );
let sym3 = Symbol( 'foo' );

sym1; // Symbol()
sym2; // Symbol(foo)
sym3; // Symbol(foo)

sym2 === sym3; //false

//used to create distinctly unique values


//ARROW FUNCTIONS

function sum( a, b ) {
    return a + b;
}

//New syntax sum(a,b) becomes...
const add = ( a, b ) => a + b;
console.log( add( 2, 32 ) );

// the '=>' is taking the place of 'function'
// return is implied 