- Demo app, especially showing that changes are persistent

- Mocking a server
```
json-server --watch pokemon.json
```

- show RESTful routes in documentation

- Explain user stories:
    - As a User, I can see all the Pokemon
    - As a User, I can add a Pokemon
    - As a User, I can remove a Pokemon

    - When <some event happens>, I want to make a <what kind of> fetch, and <manipulate the DOM how?>
    - When DOMContent Loaded, I want to make a GET fetch to /pokemon and display all pokemon
    - When a user submits a form, I want to make a POST fetch to /pokemon and add new pokemon to DOM
    - When a user clicks a pokemon, I want to make a DELETE fetch to /pokemon/:id and remove that Pokemon

# gottaFetchEmAll - Render all pokemons
    
- first fetch returns a response object

```js
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
    pokemonCard.classList.add("card")
    let header = document.createElement("h3")
    header.innerText = pokemon.name
    pokemonCard.appendChild(header)
    let image = document.createElement("img")
    image.src = pokemon.sprite
    pokemonCard.appendChild(image)
    container.appendChild(pokemonCard)
}
```

# add a new Pokemono

- add event listener: 
```js 
// on dom content loaded
getForm().addEventListener("submit", submitHandler)

function getForm() {
    return document.querySelector("form")
}

function submitHandler() {
    console.log('submit')


}
```
- show that page refreshes, add `event.preventDefault()`

- Post fetch request needs additional info.  Show docs on fetch/post to show various payload options as well as json-server docs to show what is actually needed

- Since we can't send JS objects through the Internet, only strings, show `JSON.stringify({firstName: "Paul", lastName: "Nicholsen"})`


```js

function postPokemon(){
    let data = {"name": document.querySelector("#name-input").value ,
                "sprite": getForm()[1].value} // two ways to do the same thing
    fetch('http://localhost:3000/pokemon', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
    .then(data => renderPokemon(data))

}
```

can clear form with `getForm().reset()`

# delete pokemon

- attach delete handler when pokemon card is created
- need to send a delete request to "/pokemon/:id"
- how do we get the id? `console.log(event.target)` note that we see what we clicked on (div, h2, img, whatever)
- `console.log(event.currentTarget)` instead.  That shows what the handler is attached to
- when creating the card, add ``` pokemonDiv.id = pokemonCard.id = `pokemon-${pokemon.id}` ```

```js
function deletePokemon(event){
    let id = event.currentTarget.id.split("-")[1]
    fetch(`http://localhost:3000/pokemon/${id}`, {
        method: "DELETE"
    })
}
```
- this removes from db but not off of the page.  add `event.currentTarget.remove()`

- kill server and show that elements still get removed when clicked, even though that code comes after the delete fetch call which no longer is successful.  This is "optimistic rendering".  If we didn't want this, we'd wrap the card-deletion in a .then