const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`
const main = document.querySelector('main')


// DB interaction

function fetchTrainers() {
    fetch(TRAINERS_URL)
    .then(res => res.json())
    .then(trainers => trainers.forEach(trainer => {
        buildTrainerCard(trainer)
    }))
}

function catchPokemon(trainerId, list) {
    fetch(POKEMONS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({trainer_id: trainerId})
    }).then(res => res.json())
    .then(pokemon => {
        if (!pokemon.error) {
            listPokemon(pokemon, list)
        } else {
            swal("Uh-oh", pokemon.error, "error")
        }
    })
}

function releasePokemon(pokemonId, li) {
    fetch(`${POKEMONS_URL}/${pokemonId}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json"}
    }).then(() => li.remove())
}

// DOM manipulation

function buildTrainerCard(trainer) {
    let card = document.createElement('div')
    card.className = "card"
    main.appendChild(card)

    card.innerHTML = `
        <p>${trainer.name}</p>
        <button data-id=${trainer.id}>Catch Pokemon</button>
    `

    let list = document.createElement('ul')
    card.appendChild(list)
    trainer.pokemons.forEach(pokemon => listPokemon(pokemon, list))
}

function listPokemon(pokemon, ul) {
    let li = document.createElement('li')
    li.innerHTML = `
        ${pokemon.nickname} (${pokemon.species})
        <button data-id=${pokemon.id} class="release">Release</button>
    `
    ul.appendChild(li)
}

// Event handlers

function handleMainClick(event) {
    if (event.target.nodeName === "BUTTON") {
        let button = event.target
        if (button.className === "release") {
            let id = button.dataset.id
            let li = button.parentElement
            releasePokemon(id, li)
        } else {
            let id = button.dataset.id
            let list = button.parentElement.querySelector('ul')
            catchPokemon(id, list)
        }
    }
}

main.addEventListener('click', handleMainClick)
fetchTrainers()