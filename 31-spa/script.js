document.addEventListener("DOMContentLoaded", function(){
  renderAllPokemon()
  pokemonForm().addEventListener('submit', newPokemonHandler)
  
});

// As a User, I can fill out the form and add a new 
//     Pokemons
//     "When a user submits the form, I want to make a POST 
//     fetch, and render a new Pokemon card to the DOM"


function pokemonForm() {
    return document.querySelector('form')
}

function newPokemonHandler(event){
    event.preventDefault()

    let newName = event.target.name.value
    let newSprite = event.target.sprite.value

    let newPokemon = {name: newName, sprite: newSprite}
    fetch("http://localhost:3000/pokemon", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPokemon)
    }).then(response => response.json())
    .then(newPokemon => buildPokemonCard(newPokemon))

}
function renderAllPokemon(){
    // - As a User, I can see a list of all the Pokemons
    //     "When the page loads, I want to make a GET 
    //     fetch, and render each Pokemon in a card 
    //     to the DOM"
    fetch("http://localhost:3000/pokemon")
        .then(response => response.json())
        .then(pokemonArray => {
            pokemonArray.forEach(
                pokemon => buildPokemonCard(pokemon)
            )
        })

}

function buildPokemonCard(pokemon) {
    let container = document.getElementById("container")
    let pokemonCard = document.createElement('div')
    pokemonCard.classList += "card"

    let pokemonTitle = document.createElement('div')
    pokemonTitle.className = "name"
    pokemonTitle.innerText = pokemon.name.charAt(0).toUpperCase() + pokemon.name.substring(1); 
    pokemonCard.appendChild(pokemonTitle)

    let pokemonImg = document.createElement('img')
    pokemonImg.src = pokemon.sprite
    pokemonCard.appendChild(pokemonImg)

    container.appendChild(pokemonCard)
    pokemonCard.dataset.id = pokemon.id
    pokemonCard.addEventListener("click", murderPokemon)

}

function murderPokemon() {
        // "When a user clicks on a Pokemon card, 
        // I want to make a DELETE fetch, 
        // and remove the card from the DOM"
        // let id = something
        let pokemonId = event.currentTarget.dataset.id
        fetch("http://localhost:3000/pokemon/" + pokemonId, {
          method: 'DELETE',
        }).then(response => response.json()).then(json => console.log(json))
        event.currentTarget.remove()
}