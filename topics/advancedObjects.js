// In this lesson...
// 1) Reference Type (10 - 22)
// 2) Context (25 - 51)
// 3) Instantiation (53 - 91)
// 4) Pass by Value vs Pass by Reference (and cloning) (94 - 163)
// 5) Type Coercion 



// REFERENCE TYPE
//non-primative type
// it isn't defined by the program like a number (1 is always the same 1 used by the program language)

let object1 = { value: 10 };
let object2 = object1;
let object3 = { value: 10 };

object2 === object1; // true because object2 simply references object1 meaning any changes to object1 or object2 are reflected in the other object
object1 === object3; // false
object1.value === object3.value //true (until either changes...this is simply saying 10 === 10)

[] === []; // false as arrays are objects and so fall under this as well


// CONTEXT

// often confused with Scope
// Scope is created when it sees {}
// function b() {
//    let a = 4; --> here a is scoped to within the function 
// }

// Context tell us where we are within the object 

console.log( this ); // this is the Window object if you ran this in the Console
// this simply means what is the object we are within right now 
// Helps to think of 'this' as being whatever is to the left of the dot 

function a() {
    console.log( this ); // Window object because the function is within the Window...
    // you could invoke the function by Window.a() which is because we are adding a function here to...
    // the Window object 
}

const object4 = {
    a: function() {
        console.log( this ); // object4 {a: f}
    }
};

// this matters a lot when we deal with instantiation 

// INSTANTIATION

// making instance/multiple copies of an Object 
class Player {// a class is always Capitalized 
    constructor ( name, type ) {
        console.log( 'player', this ); // Wizard{} --> see note below
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log( `Hi, I am ${ this.name }, I'm a ${ this.type }` );
    }
}

class Wizard extends Player {
    constructor ( name, type ) {
        super( name, type ); // this passes the constructor values back to the top level class's constructor
        console.log( 'wizard', this );
    }
    play() {
        console.log( `Wheeeeee, I am a ${ this.type }` );
    }
}

const wizard1 = new Wizard( "Fred", "Healer" ); // 'new' instantiates the class 

// console.log('player', this); above returns Wizard {} because....
// the above const wizard1 = new Wizard(...) kicks off the class Wizard (an Object) logic
// the class runs the constructor (name, type)
// it then sees super() which because class Wizard 'extends' class Player...
// those inputs flow to and invoke that class' constructor function
// which is when it runs across the console.log() function
// Because this whole process was kicked off by the Wizard Object,

// this cannot be accessed within an extended class until the super() constructor is invoked

// console.log('wizard', this) returns Wizard {name: "Shelly", type: "Healer"};
// this is because super() immediately goes to Player constructor so the
// console.log('wizard', this) function is last to run in this call stack;


// PASS BY VALUE vs PASS BY REFERENCE 

// Primitive types are immutable (a number is a primitive type, for example)
// A variable is assigned a value in memory.  When you change that value it destroys in memory what was an adds what is new
// This is PASSED BY VALUE

// Objects, OTOH,are PASSED BY REFERENCE

// some code to illustrate these concepts 

var a = 5;
var b = 10;

// a and b have addresses of where 5 and 10 are stored in memory

//what if...

var b = a; // we are simply copying the value and putting that copy into a spot in memory (a and b have their own memory locations)
b++;

console.log( a, b ); // 5, 6 

let obj1 = { name: "Yao", password: '123' };
let obj2 = obj1;

obj1.password = "easypeasy";

console.log( obj1, obj2 );  // password's value changed in both because Pass By Reference
// the values aren't copied, they are shared in memory
// obj1 and obj2 are pointing the same location in memory
// that location has all the key:value pairs 


// Proof Arrays are Objects 

let c = [ 1, 2, 3, 4, 5 ];
let d = c;
d.push( 170381 );
console.log( d );  // [ 1, 2, 3, 4, 5, 170381 ]
console.log( c );  // [ 1, 2, 3, 4, 5, 170381 ]

// Cloning an object with low impact on CPU... three ways 
// 1) concat
let e = [].concat( c ); // e is a clone of the array in c but is NOT a shared location in memory

// 2) Object.assign function 
let obj = { a: 'a', b: 'b', c: 'c' };
let clone = Object.assign( {}, obj );

// 3) Spread operator
let clone2 = { ...obj };

// how about if Object within an Object...?

let nestedObj = { a: 'a', b: 'b', c: { deep: 'try and copy me' } };
let cloneNested = { ...nestedObj };

console.log( nestedObj, cloneNested );
nestedObj.c.deep = "hahaha";
console.log( nestedObj, cloneNested ); // the change in the nested object applies to both 
cloneNested.c.deep = "backtooriginal";
console.log( nestedObj, cloneNested ); // the change in the nested object applies to both 

// This is called a SHALLOW CLONE...The first layer only gets cloned 

//Deep Cloning is cloning the entire Object which is done...

let superClone = JSON.parse( JSON.stringify( obj ) ); // turns everything into a string and then back into an Object 

//Warning!!! - Deep Clones can have big performance hits if the Object is really deep 


// TYPE COERCION 

// THis is often an unintended side effect of JS and is not something you should use in code

1 == '1'; // true 
// one aide of the comparison gets converted to the other
// so here it assumes you meant 1 and not '1' so it converts the string to a number 

// All languages have Type Coercion 

// in JS == induces Type Coercion but is not limited to just that..

if( 1 ) {
    console.log( 5 );
}
// 5
// JS coerces 1 to true (and will turn 0 into false)

-0 === +0; //true 
Object.is( -0, +0 ); // false 
Object.is( NaN ); // true 

// Object.is can act like ===  
