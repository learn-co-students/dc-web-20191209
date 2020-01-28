document.addEventListener("DOMContentLoaded", () => {
    let emailNodes = document.querySelectorAll(".email")
    emailNodes.forEach(emailNode => {
        emailNode.addEventListener("click", handleEmailClick)
    })
    let nameNodes = document.querySelectorAll(".firstName")

    nameNodes.forEach(nameNode => {
        nameNode.addEventListener('click', (event) => handleNameClick)
    })

    let lastNameNodes = document.querySelectorAll(".lastName")
    lastNameNodes.forEach(lastNameNode => {
        lastNameNode.addEventListener('click', lastNameClicked)
    })
    let form = document.querySelector('form')
    form.addEventListener('submit', submitHandler)
})

function submitHandler(event) {
    event.preventDefault()
    let firstName = document.getElementById("firstNameInput").value
    let lastName = document.getElementById("lastNameInput").value
    let email = document.getElementById("emailInput").value
    event.target.reset()
    addInstructor(firstName, lastName, email)
}

function handleEmailClick(event) {
    let emailAddress = event.target.innerText
    console.log(`sending email to ${emailAddress}`)
}

function handleNameClick(event) {
    let name = event.target.innerText
    alert(name)
}

function lastNameClicked() {
    console.log('someone clicked a last name')
}


// Goal 
// - When a user clicks a person's first name,
     // alert that first name on the screen

function getTable() {
    return document.querySelector('tbody')
}
function addInstructor(firstName, lastName, email) {
    let table = getTable()
    let newRow = makeNewRow(firstName, lastName, email)
    table.appendChild(newRow)

}

function makeNewRow(firstName, lastName, email) {
    let newRow = document.createElement("tr")
    // tr.id = row
    let firstNameCell = document.createElement("td")
    firstNameCell.addEventListener('click', handleNameClick )
    let lastNameCell = document.createElement("td")
    lastNameCell.className = "lastName"
    let emailCell = document.createElement("td")
    emailCell.className = "email"
    firstNameCell.innerText = firstName
    lastNameCell.innerText = lastName
    emailCell.innerText = email
    emailCell.addEventListener('click', handleEmailClick)
    newRow.appendChild(firstNameCell)
    newRow.appendChild(lastNameCell)
    newRow.appendChild(emailCell)
    firstNameCell.className = "firstName"
    newRow.id = getNewId()
    return newRow
}

function getNewId() {
    // count how many rows
    let currentRows = getTable().children.length
    // add one
    let newRowId = currentRows + 1
    // format id string
    let idString = `row-${newRowId}`
    return idString
}