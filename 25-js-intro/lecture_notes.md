- Why does JS exist?
    - Brendan Eich of Netscape.  Needed a language to compete with desktop applications in the 90s
    - Web was slow with a terrible user experience; applications were faster.
    - Front-End Web Development is all HTML, CSS, and JS

- Show some ways to open index.html (copy the path, open in browser, `open index.html`)

- Show script tag.  Demo a `console.log`, first inline then with `src="script.js"` to make sure it's hooked up

- define some variables and show they are defined in the console.  show that JS code can be executed from the console

```js
    let name="Paul"
    alert("Paul") //freezes app
    let role="teacher" // this won't be defined until alert is killed
```

- `debugger` pauses code.  `step over` advances code.  `step into` goes into the function call.  Also show sources tab to add debuggers on the fly

- Demo:

```js
let myFunc = function(num1, num2){
    if (num1 > num2) {
        alert("Num1 is bigger!")
    } else {
        alert("Num2 is bigger!")
    }
}

let testFunc = function(){
    debugger
    let num1 = 5
    let num2 = 7
    myFunc(num1, num2)
}

testFunc()
```

### Difference between Ruby and JS (elicit)
- data type number only
- assign variables with `var`, `let`, `const`
- "undefined" NaN
- functions can be written many ways
- no implicit return
- JS is more syntactically strict
- JS can have the wrong number of arguments passed in without a problem
```js
function print(name, age) {
    return name
}

print("Bob") //works fine
```
-  type coercion
    - `1 + 1` vs `"1" + "1"` vs `1 + "1"`  Check your assumptions!

### Datatypes
- What types and how many?

####Primitive
- number
    - NaN is a number
    - watch out for decimals `0.1 + 0.2` can't be represented in binary
- boolean
    - truthy vs falsey `Boolean(1)` vs `Boolean(0)` vs `Boolean([])` vs `Boolean("")`
    - helpful in `if` statements
- string
    - interpolation `I am a string named ${}`
    - concatenation
- undefined - value has not been set yet
- null - absent data
    ```js
    //undefined - you havn't set the value yet
    let sec //how many sec until mom answers
    let minutes
    //null - explicitly setting value to be NO VALUE
    sec = null
    ```

####Objects
- Objects
    - all keys are strings whether you like it or not
- Arrays
    ```js
    arr = [1, 2, 3]
    arr.lastName = "Nicholsen"
    // try arr.length and arr.lastName
    ```
- Functions
    ```js
    let crazyObj = {key1: [1, 2, function(){return function(){return function(){return 7}}}]}
    crazyObj.key1[2]()()()
    ```

### `==` vs `===`
- `==` is loose comparison.  `1 == "1"` is true
- `===` is strict.  `1 === "1"` is false

### Pass by value vs Pass by reference

All works as expected:
```js
function addTwo(y){
    let z = y
    z += 2
    return z
}
let a = 4
let b = addTwo(a)

console.log("a: ", a)
console.log("b: ", b)
```

```js
function addTwo(y){
    let z = y
    z.num = z.num + 2
    return z
}
let a = {num: 4}
let b = addTwo(a)

console.log("a: ", a)
console.log("b: ", b) // a and b will be equal
```
- `a` doesn't store the object; it stores a reference to the object.  so in the second example, a, z and y are all pointing to the same thing.  Changing one changes all.  So in the end, a and b are the same