// Solve the below questions:

// #1 Turn this array into a new array: [1,2,3,[4],[5]]. Bonus if you can do it on one line
const array = [ [ 1 ], [ 2 ], [ 3 ], [ [ [ 4 ] ] ], [ [ [ 5 ] ] ] ];
const newArray = array.flat( 2 );

// #2 Turn this array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
const greeting = [ [ "Hello", "young", "grasshopper!" ], [ "you", "are" ], [ "learning", "fast!" ] ];
const newGreeting = greeting.flatMap( greeting => greeting.join( ' ' ) );


//#3 Turn the greeting array above into a string: 'Hello young grasshopper you are learning fast!'
const newerGreeting = newGreeting.flatMap( string => {
    return string.replace( '!', '' );
} ).join( ' ' );

//ANDREI'S SOLUTION
console.log( greeting.flatMap( x => x.join( ' ' ) ).join( ' ' ) );

//#4 Turn the trapped 3 number into: [3]
const trapped = [ [ [ [ [ [ [ [ [ [ [ [ [ [ [ [ [ [ [ [ [ [ [ [ [ [ 3 ] ] ] ] ] ] ] ] ] ] ] ] ] ] ] ] ] ] ] ] ] ] ] ] ] ];

const freed = [ ...trapped.flat( 30 ) ];

//#5 Clean up this email to have no whitespaces. Make the answer be in a single line (return a new string):
const userEmail3 = '     cannotfillemailformcorrectly@gmail.com   ';

const cleanEmail3 = userEmail3.trimStart().trimEnd(); //I missed the trailing spaces...

//#6 Turn the below users (value is their ID number) into an array: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
const users = { user1: 18273, user2: 92833, user3: 90315 };

const arrayOfUsers = Object.entries( users );



//#7 change the output array of the above to have the user's IDs multiplied by 2 -- Should output:[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
const arrayOfUsers1 = Object.entries( users ).map( array => {
    return array.map( item => ( isNaN( item ) ? item : item * 2 ) );
} );

//ANDREI'S SOLUTION which has better Big O 
updatedUsersArray = usersArray.map( ( user ) => [ user[ 0 ], user[ 1 ] * 2 ] );



//#8 change the output array of question #7 back into an object with all the users IDs updated to their new version. Should output: { user1: 36546, user2: 185666, user3: 180630 }

const updatedUserObj = Object.fromEntries( arrayOfUser1 );
console.log( updatedUserObj );