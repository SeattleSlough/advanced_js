//Scope


//ROOT SCOPE
var b = "Can I access this?";
function bb() {
    var a = "hello";
    console.log( b );
}

// bb();

// console.log( a );  //this fails because a lives only within the scope of bb().  cl needs to be invoked w/in the function

// Functions have access to all variables within the root directory (they share the same parent) so console.log(b) works

function cc() {
    var b = "hello";
}

// console.log( b ); //"can I access this" as cc() not yet invoked

// cc(); //"hello" as b with the global scope staying unchanged

//
var fun = 5;

function funFunction() {
    //child scope
    var fun = "hello";
    console.log( 1, fun );
}

function funnerFunction() {
    //child scope
    var fun = "Byyye";
    console.log( 2, fun );
}

function funnestFunction() {
    //child scope
    var fun = "AHHHHHH";
    console.log( 3, fun );
}

console.log( "window", fun );
funFunction();
funnerFunction();
funnestFunction();
console.log(fun);