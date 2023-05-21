UNDERSTANDING MODULES (Climbing the Module Mountain)

# The history of JS as a way to understand the concept

## Initial Usage of JS: Inline Script

- right in the HTML
- Created two major problems:
  - Lack of Code Reusability
    - To create another page, have to copy the code
  - Pollution of the Global Namespace
    - Once you define a variable its gone
    - Creates risk of collision

## vNext...Script Tags

- Good: Allows for separation of concerns
- Problems...
  - If we want to create another page, still need to copy the script tag
  - Lack of Dependency Resolution
    - You are responsible for ensuring scripts are loaded in the correct order
  - Doesn't solve the Polluting Global Namespace
    - All functions in a page with multiple script tags is still attached to the Window Object


## v3: Immediately Invoked Function Expression (IIFE)

- Wraps a function in brackets like so...

```javascript
var myApp = {}

(function(){
    myApp.add = function(a,b) {
        return a+b;
    }
}) ()
```

- The code is telling JS to evaluate and then immediately run the function
- Good: Avoids Pollution of Global Namespace
  - Everything in IIFE has its own scope (so reduces the namespce to 1)
  - Anything you wanted to add to myApp you can do via Property or Method
- Problem: 
  - Still doesn't resolve Dependency Resolution Concerns
  - Difficult to write and read

## v4: Broweserify

- Uses *CommonJS*

```javascript
//add.js
module.exports = function add(a,b){
    return a + b
}

//file2.js
var add = require('./add') //this allows me to use add() outside of file it was created
```

Browserify is a *Module Bundler*

- Reads through all js files (file1, file2, file3, etc...)
- Reads through all syntax
- Compiles into single file and then runs the program ('bundle.js' usually)
- That is what the app uses for its script tag's src=""

This is good but still not ideal.  The issue stems from the fact that Modules were not built into the system

## Current: **MODULES**
What are *Modules?*

- Building blocks for writing code
- These blocks are really good at one specific thing
- ES6 now enables us to skip the Browserfy middleman

*ES6 + Webpack2*

```javascript
// add.js
export const add = (a,b) => a + b; //export multiple functions
//or
export default function add() {
    return a + b;
}  // default keyword means only one function is exported from add.js

//js2.js
import {add} from './add' // destructuring
//or
import add from './add'  // can use if accessing a 'default' export based file
```

ES6 has introduced *export* and *import* keywords 

WEBPACK is also a Module Bundler but unlike Browserify

- Solves challenge of downlevel browser support
- Allows for ES6 (which is where support isn't always guaranteed)

This is what we will be using going forward (React is going to be the showcase for this)
