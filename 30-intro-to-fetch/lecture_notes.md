- Final pillar (after DOM manipulation and Events) is Server-Side Communication
    - Often called AJAX (Asychronous JS and XML).  Outdated but name stuck (usually JSON now)

- Communication with server needs to be non-blocking, or asynchronous.  Don't want everything on your app to stall while you wait for a server response
- Async code doesn't run until all sync stuff is done.  Seen that with set timeout functions or mouse clicks in our callback functions (process this thing after)

- Pseudocode:

```js
getHTTP("https://www.reddit.com/.json", function(){
    response.convertStringToJS(function() { //this takes too long, so we need a callback
        // get the data
        obj.data.children.forEach(function(post) { //another callback
            rendertoDom
        }
    }) 
})
```

- ^^^ Known as callback hell where every function has a callback.  Hard to read/manage and was limiting JS

- `fetch` was designed to solve this issue.  `fetch("https://animal-farm-api.herokuapp.com/animals")` returns a Promise.
    - Special kind of datatype
    - a value that changes over time
    - starts as pending, then is either fulfilled or rejected
    - show diagram in documentation
    - Promise is an IOU.  "I'll get you a sandwich, and then give me a high-five."
    - Show promise is fulfilled: `let p = fetch("https://animal-farm-api.herokuapp.com/animals")`

- start server with `rails s`
- Slow API at `localhost:3000/hello/4`
- `let promise = fetch('http://localhost:3000/hello/5')`.  Show that `promise` is pending, pending, resolved.
- show `promise.then(() => {console.log('done')})`

- `let promise = fetch('http://localhost:3000/hello/5')`
- `promise.then((response) => {console.log("done", response)})`

- Show chaining `.then`

- Response object is not super useful

- `.then().then()`

- Easier to read, easier to manage

```js
let promise = fetch("https://animal-farm-api.herokuapp.com/animals")
    .then((response) => { response.json()})
    .then((data) => {console.log(data)})
```

- can refactor:  Parens around single argument can be removed; so can brackets/return if single line
```js
let promise = fetch("https://animal-farm-api.herokuapp.com/animals")
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
```

```js
document.addEventListener("DOMContentLoaded", function() {
    fetch("https://animal-farm-api.herokuapp.com/animals")
        .then(response => response.json())
        .then(data => {
            debugger
            console.log(data)
        })
    })
````

Build out:

```js
document.addEventListener("DOMContentLoaded", function() {
    fetch("https://animal-farm-api.herokuapp.com/animals")
        .then(response => response.json())
        .then(animalsArray => {
            let container = document.querySelector(".container")
            animalsArray.forEach((animal) => {
                let animalDiv = document.createElement("div")
                container.appendChild(animalDiv)
                let animalTitle = document.createElement('h3')
                animalTitle.innerText = `${animal.name} the ${animal.species}`
                animalDiv.appendChild(animalTitle)
                let animalImg = document.createElement("img")
                animalDiv.appendChild(animalImg)
                animalImg.src = animal.img
            }) 
        })
    })
```

- Refactor as necessary

- If time:
    - Add to HTML:  `<button>Show all animals</button`

```js
document.addEventListener("DOMContentLoaded", function() {
        let button = document.querySelector("button")
        button.addEventListener("click", fetchAnimals)
    })
```

# Error catching

```js
fetch('http://localhost:3000/hello/5')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch((error) => {alert(error)})

```