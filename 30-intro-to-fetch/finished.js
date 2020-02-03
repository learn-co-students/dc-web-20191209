document.addEventListener("DOMContentLoaded", function() {
    // let button = document.querySelector("button")
    // button.addEventListener("click", fetchAnimals)

    fetch("http://localhost:3000/hello/2")
        .then(response => response.json())
        .then(json => console.log(json))
        .catch((error) => {alert(error)})
    console.log("still running")

})

function renderAnimal(animal) {
    let container = document.querySelector(".container")
    let animalDiv = document.createElement("div")
    container.appendChild(animalDiv)
    let animalTitle = document.createElement("h2")
    animalTitle.innerText = animal.name
    animalDiv.appendChild(animalTitle)
    let animalImg = document.createElement("img")
    animalImg.src = animal.img
    animalDiv.appendChild(animalImg)
}

function fetchAnimals() {
    fetch("https://animal-farm-api.herokuapp.com/animals")
        .then(response => response.json())
        .then(animalsArray => {
            animalsArray.forEach((animal) => {
                renderAnimal(animal)
            })
        })
}