- JS not OO but we can pretend

- review of Ruby OO, especially `self` 
- show `self` in irb and `this` in console

- Build some js objects:

```js
let paul = {
    firstName: "Paul",
    lastName: "Nicholsen"
}

let ann = {
    firstName: "Ann",
    lastName: "Duong"
}
```

add function objects:

```js
let paul = {
    firstName: "Paul",
    lastName: "Nicholsen",
    greet: function(){
        console.log(`${this.firstName} says hi`)
    }
}
```

- in this example `this` is very similar to `self`

- is `paul.greet === ann.greet`? NO.  Why not?
- different objects in memory; just like 
```js
a = {"foo": 1}
b = {"foo": 1}
a === b //false
```

- We are repeating ourselves anyway
Better:
```js
function greet() {
    console.log(`${this.firstName} says hi`)
}

let paul = {
    ...
    greet: greet //not invoked
}
```

now we are passing by reference and `paul.greet === ann.greet`

If we call greet() and put in a debugger, `this` is Window object again.  **The value of `this` changes depended on where the function is invoked**.  window.firstName is undefined.  We can set it if we want

- invoke greet() by adding EventListener to button and show that `this` is the button that was clicked

- "use strict" mode enabled.  
- Normal:
    `a = "foo"` actually adds it onto window.  Strict will raise an error.  This is default with React
    strict mode also keeps `this` from being the window, so we can be sure it only refers to instances as we like.  
    show `this` in `greet()` with and without strict mode

- make multiple buttons and give click handler of `greet`.  

- two ways to change what `This` is:
    - `.bind` (show docs) creates brand-new function with `this` set to provided value
    - `let greetCopy = greet.bind()`
    - `greetCopy === greet //false`
    - `greet.bind(paul)`.  add appropriate event handlers.  show how `this` changes from the button to the instance

- Weird stuff:
```js
let paul = {
    firstName: "Paul",
    lastName: "Nicholsen",
    greet: greet
}

function greet() {
    console.log(`${this.firstName} says hi`)
    this.newProperty = "foobar"
    // this works as expected
}

function greet() {
    console.log(`${this.firstName} says hi`)
    function setNewProperty() {
         this.newProperty = "foobar"
    }
    setNewProperty()
    // this adds a property to window
}
```
