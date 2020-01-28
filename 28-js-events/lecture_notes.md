- Three Pillars of Javascript
    - DOM Manipulation
    - Events
    - Server-side communication

- make sure js is connected
- introduce setTimeout function; show docs
```js
console.log('page loaded')
setTimeout( ()=>{console.log('2 seconds have passed')}, 2000)
console.log('all done')
```
- the order may not be as expected.  explain _synchronous_ vs _asynchronous_ code

- even when timeout is set to 0ms because synchronous code gets prioritized

# `.addEventListener`
- called on node (document, form, button, div, whatever)
- string for event, callback function, optional event

```js
document.addEventListener("click", listenForClick)

function listenForClick() {
    console.log('clickety click clack')
}
```

can add optional event object:
```js
document.addEventListener("click", listenForClick)

function listenForClick(e) {
    console.log('clickety click clack')
    console.log(e)
}
```

Types of events:  https://developer.mozilla.org/en-US/docs/Web/Events

- DOMContentLoaded
    - script tag at top might try to reference element that hasn't been created yet

```js
document.addEventListener("DOMContentLoaded", () => {
    console.log(document.querySelector("tbody"))
})
```

- Build deliverables as listed in README:
    - Event handlers generally added on DOMContentLoaded or on element creation


```js
document.addEventListener("DOMContentLoaded", () => {
    let emailTD = document.querySelector(".email")
    emailTD.addEventListener("click", onClickOfEmail)
})

function onClickOfEmail() {
    console.log('email clicked')
}
```

- only works on first one
- introduce forEach (takes CB function)
```js
document.addEventListener("DOMContentLoaded", () => {
    let emailElements = document.querySelectorAll(".email")
    emailElements.forEach(td => {
        td.addEventListener("click", onClickOfEmail)
    })

})

function onClickOfEmail() {
    console.log('email clicked')
}
```

we want to log the person's email:
```js
function onClickOfEmail(e) {
    console.log(e.target.innerText)
}
```

### Form Submit:
- click vs submit:  submit includes hitting enter
- introduce `e.preventDefault()`

```js
document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector('form')
    form.addEventListener('submit', handleFormSubmit)

})

function handleFormSubmit(e) {
    e.preventDefault()
    let firstName = document.querySelector("#firstNameInput").value
    let lastName = document.querySelector("#lastNameInput").value
    let email = document.querySelector("#emailInput").value
    addInstructor(firstName, lastName, email)
    e.target.reset()
}
function onClickOfEmail(e) {
    console.log(e.target.innerText)
}
```

- need to add email event listener on row creation