Re-emphasize:
    - Because JS is so flexible, you have to learn what's working on, not just the patterns
    - Make no assumptions--verify everything in a console.log or a debugger

Open `index.html` in terminal.  Review different ways to open (`open .`, "Open in Browser" from Sublime).  Good time to point out how URLs find resources in a file path vs a web address

HTML (file) vs elements in browser (DOM).  DOM is a tree of nodes.  They are very similar but different.  HTML is a static file that the browser parses into an object called document.  (show `document` in console)

`document` has many built-in methods.  show `document.children` which is an array-like structure of nodes.  Build out the tree on the board a few levels manually then by using the elements tab.
    - document.children[0] // html
    - document.children[0].children // head, body
    
Demo a change:

`document.children[0].children[1].children[1].children[1].children[2].children[1].innerText = "Superman"`.  We can now modify pages _after_ they've been rendered, which was a limitation of Rails and other back-end frameworks.

Redo the above with `.querySelector`.  HTML remains the same; DOM is what changes.
 
Demo on Twitter (show chart in README) (these can all be called on document or any other node)
- `.getElementsByClassName` -> Returns HTML Collection
- `.getElementById` -> Returns single element
- `.querySelector(".tweet-text")` // takes a css selector.  Returns first
- `.querySelectorAll(".tweet-text")` -> Node List (array of HTML nodes) 
- `.getElementsByTagName('div')` -> HTML collection (can have stuff besides nodes, like text)

```js
let tweetsNodes - document.querySelectorAll(".tweet-text")
for(let i=0; i<tweetNodes.length; i++) {
    tweetNodes[i].innerText = "something funny"
}
````

- play with element.style.whatever
- element.classList.add(newClassName)

**Activity:**

with a partner, use Javascript to change the Wikipedia DOM page to be on a topic of your choosing

- `innerText` vs `innerHTML`
     - innerHTML is a string of the HTML including tags like `<div>`
    - often do the same thing, but HTML will parse the string and handle formatting when necessary.  

- practice DOM manipulation on sample site.  Build `addInstructor(firstName, lastName, email)`

- start by console.log(tbody).  move script tag to head and show that it doesn't console.log; body doesn't exist yet when we called that

- sketch out tree structure of table / row

```js
function addInstructor(firstName, lastName, email) {
    console.log(firstName, lastName, email)
    let table = getTableBody()
    let newRow = makeTableRow(firstName, lastName, email)
    table.appendChild(newRow)
}

function getTableBody() {
    return document.querySelector('tbody')
}

function makeTableRow(firstName, lastName, email) {
    let tr = document.createElement('tr')
    let firstNameCell = document.createElement('td')
    firstNameCell.className = "firstName"
    firstNameCell.innerText = firstName
    let lastNameCell = document.createElement('td')
    lastNameCell.className = "lastName"
    lastNameCell.innerText = lastName
    let emailCell = document.createElement('td')
    emailCell.className = "email"
    emailCell.innerText = email
    tr.appendChild(firstNameCell)
    tr.appendChild(lastNameCell)
    tr.appendChild(emailCell)
    return tr
}
```

could do something like

tbody.innerHtml += `
 <tr>
    <td class="firstName">${firstName}</td>
...
  </tr>
  `


but this 
    a) overwrites _all_ nodes in tbody; performance hit
    b) erases all event listeners, which will be covered tomorrow