console.log('connected')


function getTable(){
    return document.getElementsByTagName('tbody')[0]
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
    let lastNameCell = document.createElement("td")
    lastNameCell.className = "lastName"
    let emailCell = document.createElement("td")
    emailCell.className = "email"
    firstNameCell.innerText = firstName
    lastNameCell.innerText = lastName
    emailCell.innerText = email
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
    let newRowId = ++currentRows
    // format id string
    let idString = `row-${newRowId}`
    return idString
}