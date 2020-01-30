document.addEventListener("DOMContentLoaded", function() {
        let button = document.querySelector('button')
        button.addEventListener('click', handleButtonPress)
    })


function renderAnimalCard(animalObject) {
    let animalCard = document.createElement('div')
    animalCard.classList = "card"

    //build animal name h2
    let animalName = document.createElement('h2')
    animalName.innerText = animalObject.name
    animalCard.appendChild(animalName)

    //build animal species
    let animalSpecies = document.createElement('div')
    animalSpecies.innerText = animalObject.species 
    animalCard.appendChild(animalSpecies)
    
    //build animal img

    let animalImg = document.createElement('img')
    animalImg.src = animalObject.img 
    animalCard.appendChild(animalImg)



    animalContainer().appendChild(animalCard)
}

function animalContainer() {
    return document.querySelector(".container")
}

function handleButtonPress(event) {
    let promise = fetch("https://animal-farm-api.herokuapp.com/animals")
        .then(response => response.json())
        .then(data => 
            data.forEach(animalObj => renderAnimalCard(animalObj)))
    event.target.remove()

}