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
