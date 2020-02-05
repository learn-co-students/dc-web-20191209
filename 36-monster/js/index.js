document.addEventListener('DOMContentLoaded', () => {
    fetchMonsters()
    monsterForm().addEventListener('submit', processForm)
    nextButton().addEventListener('click', nextButtonHandler)
    backButton().addEventListener('click', backButtonHandler)


})

function nextButtonHandler() {
    let currentPage = parseInt(monsterContainer().dataset.pageNumber)
    let nextPage = currentPage + 1
    fetchMonsters(nextPage)
}       

function backButtonHandler() {
    let currentPage = parseInt(monsterContainer().dataset.pageNumber)
    let previousPage = currentPage - 1
    fetchMonsters(previousPage)
}       

 function fetchMonsters(page=1) {
// **When the page loads, make a GET fetch request 
// to localhost:3000/monsters/?_limit=10 and render
 // the monsters to the DOM**
    page = Math.max(1, page)
    monsterContainer().dataset.pageNumber = page
    while (monsterContainer().firstChild) {
        monsterContainer().removeChild(monsterContainer().firstChild)
    }
    fetch(`http://localhost:3000/monsters/?_limit=3&_page=${page}`)
        .then(response => response.json())
        .then(monsterArray => monsterArray.forEach(
            monster => renderMonster(monster)))
 }

 function renderMonster(monsterObject) {
//  Each monster's name, age, and
//   description should be shown.*
    let monsterCard = document.createElement('div')
    monsterCard.className = 'card'

    let monsterName = document.createElement('h4')
    monsterName.innerText = monsterObject.name

    monsterCard.appendChild(monsterName)

    let monsterAge = document.createElement('div')
    monsterAge.innerText = `Age: ${monsterObject.age}`

    monsterCard.appendChild(monsterAge)

    let monsterDesc = document.createElement('div')
    monsterDesc.innerText = monsterObject.description
    let editForm = document.createElement('form')

    monsterCard.appendChild(monsterDesc)
    editForm.style.display = 'none'
    let nameInput = document.createElement('input')
    nameInput.value = monsterObject.name 
    nameInput.name = "name"
    editForm.appendChild(nameInput)
    let ageInput = document.createElement('input')
    ageInput.value = monsterObject.age 
    editForm.appendChild(ageInput)
    ageInput.name = "age"

    let descriptionInput = document.createElement('input')
    descriptionInput.value = monsterObject.description 
    editForm.appendChild(descriptionInput)
    descriptionInput.name = 'description'

    let monsterId = document.createElement('input')
    monsterId.type = "hidden"
    monsterId.value = monsterObject.id
    editForm.appendChild(monsterId)
    monsterId.name = 'id'


    let submit = document.createElement('button')
    submit.innerText = "Edit This Monster"
    editForm.appendChild(submit)
    editForm.addEventListener('submit', editMonster)

    monsterCard.appendChild(editForm)
    monsterCard.addEventListener('click', () =>
        editForm.style.display = 'block'
    )
    monsterContainer().appendChild(monsterCard)
 }

 function editMonster(event) {
    event.preventDefault()
    let newName = event.target.name.value
    let newAge = event.target.age.value
    let newDescription = event.target.description.value 
    let id = event.target.id.value
    let monsterData = {name: newName, age: newAge, description: newDescription}
    fetch(`http://localhost:3000/monsters/${id}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(monsterData)})
    .then(res => res.json())
    .then(monster => {
        let oldMonsterCard = event.target.parentElement
        oldMonsterCard.children[0].innerText = monster.name
        oldMonsterCard.children[1].innerText = monster.age
        oldMonsterCard.children[2].innerText = monster.description
    })
    event.target.style.display = 'none'
    }

function processForm(event) {
// **When a user submits the form, make a
//  POST fetch call to localhost:3000/monsters 
// and add a new monster to the DOM**
    event.preventDefault()
    let name = event.target.name.value
    let age = parseInt(event.target.age.value)
    let description = event.target.description.value
    let newMonster = {name: name,
                      age: age,
                      description: description}
    fetch("http://localhost:3000/monsters", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newMonster)
    }).then(response => response.json())
    .then(monster => renderMonster(monster))
    event.target.reset()
}


 function monsterContainer() {
    return document.querySelector("#monster-container")
 }

 function monsterForm() {
    return document.getElementsByTagName('form')[0]
 }

 function nextButton() {
    return document.getElementById("forward")
 }

 function backButton() {
    return document.getElementById("back")
 }

