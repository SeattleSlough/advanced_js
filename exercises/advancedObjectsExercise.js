//Evaluate these:
//#1
[ 2 ] === [ 2 ]; // true (it is FALSE because they are different Objects!!!)
{ } === {};  // false 

//#2 what is the value of property a for each object.
const object1 = { a: 5 };
const object2 = object1;
const object3 = object2;
const object4 = { a: 5 };
object1.a = 4;


//#3 create two classes: an Animal class and a Mammal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 

class Animal {
    constructor ( name, type, color ) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
}
class Mammal extends Animal {
    constructor ( name, type, color ) {
        super( name, type, color );
    }
    moo() {
        console.log( `Hello there! My name is ${ this.name } and I am a ${ this.color } ${ this.type }` );
    }
}

const cow1 = new Animal( "Betty", "cow", "brown" );
cow1.moo();