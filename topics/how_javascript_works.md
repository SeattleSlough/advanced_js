**Lecture on how JS works under the hood**

True or False: Javascript is a single threaded language than can be non-blocking?  

# *Basics*

## *What is a program?*

- allocates memory 
- parse and execute scripts (read and run commands)

*JavaScript Engine*

- Browsers have a JS engine
- Chrome as example uses the 'V8' engine
  - reads the code
  - and changes it into machine language that can be read by the computes
- Engine consists of two components
  - Memory Heap (where memory allocation happens)
  - Call Stack (where code is read and executed)

# **ALLOCATING MEMORY**

## Creating variables is allocating memory...

```javascript
const a = 1;
const b = 2;
const c = 300;
```

...but it creates issue of *memory leak*

## *Definition:*

- There is a limited amount of memory we can use
- When you have unused allocation laying around, it fills up the Memory Heap
- This is why developers say global variables aren't best practice
- Cleaning up memory is critical to an efficient program

# **THE CALL STACK**

## Overview:

### Example 1

```javascript
console.log('1')
console.log('2')
console.log('3')
```

If you run this code, the output is
1
2
3

The Call Stack in Example 1 works like this..

- Reads first line, runs it, cl's 1
- Removes first line, moves to second, runs it
- Removes, second line, moves to third, runs it
- Removes third line and the Stack is clear

Example 2: *more complicated* example would be...

```javascript
const one = () => {
    const two = () => {
        console.log(4)
    }
} 
```

Executing the code...
one() --> 4

Call Stack [sequential view]
*first step*
one() starts on top of the Call Stack

*second step*
two() when invoked moves to the top of the Call Stack
one()

*third step*
console.log('4') now put at the top of the Call Stack
two()
one()

Now the Call Stack draws down in the that order cl --> two() --> one() --> done (Call Stack is now empty)

## Revisting the statement > 'Javascript is a single threaded language than can be non-blocking?'  *TRUE*

Javascript is...

1. **Single Threaded** = it only has one Call Stack
2. **Non-blocking** = first in, last out (FILO)

### *Why is JS single threaded?*  It avoids complicated scenarios that can yield DEADLOCKS

This is the concept of ## **Synchronous Programming** = each line has to run before another can be executed (*Single Threaded*)

Stack overflow happens when the Call Stack has too many items (it becomes over capacitated).  A simple example is a *recursive function:*

```javascript
function foo() {
    foo()
}
```

The Call Stack never ceases to be filled so it overflows

**How do we ensure Non-Blocking?**  *Asynchronous Programming* capability...

- We have a single threaded Call Stack
- One area of code takes a long time to run before the next in line can be pulled onto the Call Stack (like a network call)
- Asynchronous allows for the next line of code to run while timing out the blocking code

````javascript
console.log('1');
setTimeout(() => {
    console.log('2')
}, 2000); // this pauses console.log('2') for two seconds
console.log('3')
````

If you ran this it would look like...
1
3
(two second pause...) 2

**# The Javascript Run-Time Environment**

## Components of the JS R-T-E Provided by Broswers:

- *Memory Heap* (discussed)
- *Call Stack* (discussed)
- *Web APIs* (not part of JS)
  - DOM (document)
  - AJAX (XMLHttpRequest)
  - Timeout(setTimeout)
- *Callback Queue*
  - onClick
  - onLoad
  - onDone
- *Event Loop*

### Discussing the above using previous code...

````javascript
console.log('1');
setTimeout(() => {
    console.log('2')
}, 2000); // this pauses console.log('2') for two seconds
console.log('3')
````

CALL STACK
cl('1") --> setTimeout() [popped out of queue to Web API]--> cl('3) --> cl('2') --> empty

WEB API
setTimeout(), 2000 --> when timer is complete it invokes a callback function

CALLBACK QUEUE
callback() [ready to run ] --> *the callback() is cl('2)*

EVENT LOOP
[keeps checking to see if Call Stack is empty.  If it is, it throws whatever is in the Callback Queue onto the Call Stack]

*NOTE* Even if you set the timer to 0, it still runs 1, 3, 2.

### Asynchronous vs Synchronous

- Synchronous is like a phone call
  - It either gets answered or not
  - If not, the call is done
- Asynchronous is like a text
  - You send the text and await a response
  - In the interim you can continue on doing whatever

## When Does Asynchronous Happen?

- A lot
- Communicating between networks and machines, for example
- We will learn more later in the course (server side)