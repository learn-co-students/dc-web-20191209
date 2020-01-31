// document.addEventListener("DOMContentLoaded", function(){
//   console.log('DOM loaded')
// });

document.addEventListener("DOMContentLoaded", function(){
  gottaFetchEmAll()
  getForm().addEventListener("submit", submitHandler)
});

function gottaFetchEmAll() {
    fetch("http://localhost:3000/pokemon")
        .then( response => response.json() )
        .then( pokemonArray => {
            pokemonArray.forEach(pokemon => renderPokemon(pokemon))
        })
}

function renderPokemon(pokemon){
    let container = document.getElementById("pokemon-container")
    let pokemonCard = document.createElement("div")
    pokemonCard.id = `pokemon-${pokemon.id}`
    pokemonCard.classList.add("card")
    let header = document.createElement("h3")
    header.innerText = pokemon.name
    pokemonCard.appendChild(header)
    let image = document.createElement("img")
    image.src = pokemon.sprite
    pokemonCard.appendChild(image)
    container.appendChild(pokemonCard)
    pokemonCard.addEventListener("click", deletePokemon)
}

function getForm() {
    return document.querySelector("form")
}

function submitHandler(e) {
    e.preventDefault()
    postPokemon()
    getForm().reset()

}

function postPokemon(){
    let data = {"name": document.querySelector("#name-input").value ,
                "sprite": getForm()[1].value} // two ways to do the same thing
    console.log(data)
    fetch('http://localhost:3000/pokemon', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
    .then(data => renderPokemon(data))
}

function deletePokemon(event){
    let id = event.currentTarget.id.split("-")[1]
    fetch(`http://localhost:3000/pokemon/${id}`, {
        method: "DELETE"
    })
    event.currentTarget.remove()
}