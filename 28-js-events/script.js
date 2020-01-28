document.addEventListener("DOMContentLoaded", () => {
    let emailNodes = document.querySelectorAll(".email")
    emailNodes.forEach(emailNode => {
        emailNode.addEventListener("click", handleEmailClick)
    })
})


function handleEmailClick(event) {
    let emailAddress = event.target.innerText
    console.log(`sending email to ${emailAddress}`)
}


// Goal 
// - When a user clicks a person's first name,
     // alert that first name on the screen

// function addInstructor(firstName, lastName, email) {
//     let table = getTable()
//     let newRow = makeNewRow(firstName, lastName, email)
//     table.appendChild(newRow)

// }

// function makeNewRow(firstName, lastName, email) {
//     let newRow = document.createElement("tr")
//     // tr.id = row
//     let firstNameCell = document.createElement("td")
//     let lastNameCell = document.createElement("td")
//     lastNameCell.className = "lastName"
//     let emailCell = document.createElement("td")
//     emailCell.className = "email"
//     firstNameCell.innerText = firstName
//     lastNameCell.innerText = lastName
//     emailCell.innerText = email
//     newRow.appendChild(firstNameCell)
//     newRow.appendChild(lastNameCell)
//     newRow.appendChild(emailCell)
//     firstNameCell.className = "firstName"
//     newRow.id = getNewId()
//     return newRow
// }

// function getNewId() {
//     // count how many rows
//     let currentRows = getTable().children.length
//     // add one
//     let newRowId = currentRows + 1
//     // format id string
//     let idString = `row-${newRowId}`
//     return idString
// }