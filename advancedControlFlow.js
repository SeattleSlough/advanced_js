//Ternary Operator & Switch

//TERNARY
// condition ? expression1 : expression2;
// simple, elegant alternative to IfElse statement

// if condition is TRUE, execute expression1, of FALSE, execute expression2

function isUserValid( bool ) {
    return bool;
}

var answer = isUserValid( true ) ? "You may enter" : "Access denied";

answer; // "You may enter"

var anotherAnswer = isUserValid( false ) ? "You may enter" : "Access denied";

anotherAnswer; //"Access denied"

var automatedAnswer = "Your account # is " + ( isUserValid( false ) ? "1234" : "not available" );
automatedAnswer; // "Your account # is not available"

//proof point of ternary is identical to an if/Else
function condition() {
    if( isUserValid( true ) ) {
        return "You may enter";
    } return "Access denied";
}

var answer2 = condition();
answer2; // "You may enter"

//SWITCH STATEMENT - SYNTAX

// function whatToDo(argument)
// create variable
// switch(variable) {
//     case "foo"  //this is taking the argument and if arg === "foo" the case is run, if not, it moves on
//          variable = bar
//          break --> this kicks us out of the loop w/out ending the function.  ALWAYS comes after the variable is defined
//     case "alpha" // as above
//          variable = omega
//          break
//     default: 
//          variable = whatever should happen absent a valid 'case' argument being passed to funtion
//          break
//}
// return bar;
// }

function moveCommand( direction ) {
    var whatHappens;
    switch( direction ) {
        case "forward":
            whatHappens = "You encounter a monster";
            break;
        case "back":
            whatHappens = "You arrived home";
            break;
        case "right":
            whatHappens = "You found a river";
            break;
        case "left":
            whatHappens = "You run into a troll";
            break;

        default:
            whatHappens = "Please enter a valid direction ('forward', 'back', 'right', 'left')";
            break;
    }
    return whatHappens;
}

moveCommand(); // "Please enter a valid direction ('forward', 'back', 'right', 'left')"
moveCommand( 'left' ); // "You run into a troll"
// and so on...

