//CLOSURES
const first = () => {
    const greet = "Hi";  //immutable but scoped to this function avoiding conflicts elsewhere
    const second = () => {
        alert( greet );
    };
    return second;
};

const newFunc = first();
// this is saying newFunc = const second = () => {
// alert( greet );
// }
newFunc();

// closures is that the child always has access to variables owned by the parent function

// Closures: a function ran.  the function executed.  it's never going to execute again.
// BUT it is going to remember there are references to those variables
// so the child scope has access to the parent scope
// Parent scopes don't have access to their children


//CURRYING
const multiply = ( a, b ) => a * b;
const curriedMultiply = ( a ) => ( b ) => a * b;

curriedMultiply( 3 ); // (b) => a * b;
curriedMultiply( 3 )( 4 ); // 12

// Currying is a process of taking a function accepting multiple arguments into taking them one at a time
// This is done to make the function more extensible.  
// 

const multiplyBy5 = curriedMultiply( 5 );
// multiplyBy5 = (b) => 5 * b
multiplyBy5( 10 ); // 50 (5)(10)
multiplyBy5( 3 ); // 15 (5)(3)


//COMPOSE
// the act of putting two functions together to form a third function
// where the output of one function is the input of the other

const compose = ( f, g ) => ( a ) => f( g( a ) );
// f and g are both functions

// here is how this might work
const sum = ( num ) => num + 1;

compose( sum, sum )( 5 ); // 7


// PURE FUNCTIONS: Functional Determinism & Avoiding Side Effects
// We think of functions as being their own universe and these two principles ensure we adhere to that philosophy

//Side Effects
// side effects are actions that happen inside the function that we don't know anything about
// if it reads or writes to an external variable or console.logs then it's a Side Effect
// IOW, the function should be entirely self-contained to the arguments it is passed

//example of Side Effect
var a = 1;
function b() {
    a = 2;
}

// Functional Purity
// We always want a value to be returned by a function.
// This makes our code DETERMINISTIC (Determinism)
// The same inputs always return the same value (e.g., compose(sum, sum)(5) always returns 7 OR multiplyBy5(3) always returns 15)












