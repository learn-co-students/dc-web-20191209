document.addEventListener('DOMContentLoaded', () => {
    fetchMonsters()

})


// *When the page loads, show the first 10 monsters. 
//  Each monster's name, age, and
//   description should be shown.*

// **When the page loads, make a GET fetch request 
// to localhost:3000/monsters/?_limit=10 and render
 // the monsters to the DOM**

 function fetchMonsters() {
    fetch("http://localhost:3000/monsters/?_limit=10")
        .then(response => response.json())
        .then(monsterArray => monsterArray.forEach(
            monster => renderMonster(monster)))
 }

 function renderMonster(monsterObject) {
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

    monsterCard.appendChild(monsterDesc)
    
    monsterContainer().appendChild(monsterCard)
 }

 function monsterContainer() {
    return document.querySelector("#monster-container")
 }


