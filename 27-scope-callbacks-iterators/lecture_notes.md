- Ruby is OOP.  JS is functional (expanded over time), meaning functions are the core.  Functions themselves are objects.

Demo different ways to write functions:

####function declaration 
```js
function sayHello() {
    console.log("Hello world")
}

sayHello vs sayHello()
```
 
####function expressions

- expressions are things that can be evaluated, like `1 + 1`; you can derive a value from them.

- A function can be a value that is created like above, but without the name.  Also known as anonymous functions:

```js
let greetPerson = function(name){
    console.log(`Hello ${name}`)
}
```

- functions can be stored as variables just like anything else.  This will prove central to the understanding of JS

- "Hoisting":
    ```js
    debugger //only declaration exists; it's hoisted

    function declaration() {
        console.log("I am a declaration")
    }

    let expression = function(){
        console.log("I am an expression")
    }


    debugger
    ````

####arrow functions
    - type of expression
```js
let addOneToNumber = function(num){
    return num + 1
}

// rewrite as 

let addOneToNumber = (num) => { // just remove the keyword function
    return num + 1
}
```
can remove the whitespace, parens around argument if only one argument, and can remove the return and braces if only one liner that is a return
```js
let addOneToNumber = num => num + 1
```

### Scope
- where a variable exists

- var vs let vs const
    ```js
    var teacher = "Jack"
    var teacher = "Jill"
    console.log(teacher)
    ```
    is fine because `var` can be reassigned and redeclared

    ```js
    let teacher = "Jack"
    let teacher = "Jill"
    console.log(teacher)
    ```
    raises an error because let can be reassigned but not redeclared

    ```js
    const teacher = "Jack"
    teacher = "Jill"
    console.log(teacher)
    ```
    raises an error because `const` can not be reassigned or redeclared

    does not mean const is immutable
    ```js
    const teacher = {name: "Paul"}
    teacher.name = "Ann"
    // fine because `teacher` points to the object either way
    teacher = {name: "Ann"} // will not work because it's a re-assignment
    ```

```js
let teacher = "Paul"
function someFunction() {
    let teacher = "Dumbledore"
    console.log("inside function: ", teacher)
}

someFunction()
console.log("in global scope:", teacher)
```

above works because inner function variable is limited to the scope of that function.  other teacher is global (which is bad)

```js
let teacher = "Paul"
function someFunction() {
    var teacher = "Dumbledore"
    if(true){
        var teacher = "Snape"
        console.log('inside a block: ', teacher)
    }
    console.log("inside function: ", teacher)
}
someFunction()
console.log("in global scope:", teacher)
```
`var` has functional scope so "snape" kills "dumbledore"

do again with `let`.  Works as expected because `let` (and `const`) have block scoping.  

Scope chain:
    - starts in immediate, inner-most scope and then goes up to parent scope.  This is one of the reasons why global variables are dangerous

- Demo for later exercise that `console.log(cerealData)` works because both files are required in index.html (but fails if the order is switched)

## Callbacks

```js
function sayHey() {
    console.log("Hey")
}

//because functions are objects, they can be passed as variables/arguments
function executeThis(x){
    x()
}

executeThis(sayHey) // we don't invoke sayHey here; we treat it as a variable
```
- "sayHey" is a callback function
s
```js
function timesTwo(num) {
    return num * 2
}

let test = [1, 2, 3]

test.map(timesTwo) //takes a callback function
```

- Build out map 

```js
function myMap(arr, func){

    let newArray = []
    for(let i=0; i<arr.length; i++) {
        let newValue = func(arr[i])
        newArray.push(newValue)
    }
    return newArray
}
```

- Have students build myFilter themselves (relate to Ruby .select) to get all numbers greater than 2

```js

let test = [2, 3, 4, 5]
function greaterThanThree(num) {
    return num > 3
}

function myFilter(arr, func){

    let newArray = []
    for(let i=0; i<arr.length; i++) {
        if (func(arr[i])) {
            newArray.push(arr[i])
        }
    }
    return newArray
}

test.filter(greaterThanThree)
test.filter(function(x) {return x > 3}) // rewrite as anonymous function
test.filter(x => x > 3) // rewrite as arrow function

```