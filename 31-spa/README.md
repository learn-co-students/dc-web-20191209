# Single Page Applications
- When <some event> happens, I want to make a <what kind of> fetch call, and manipulate the DOM <how?>

### Mocking your own backend
```
json-server --watch db.json
```

### JSON Server Routes
```
GET    /pokemon
GET    /pokemon/1
POST   /pokemon
PUT    /pokemon/1
PATCH  /pokemon/1
DELETE /pokemon/1
```
To POST a new Pokemon:
```
body: JSON.stringify({
  "name": "charmeleon",
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
})
```

### Building out the frontend (Deliverables)

- As a User, I can see a list of all the Pokemons
    "When the page loads, I want to make a GET fetch, and render each Pokemon in a card to the DOM"
- As a User, I can fill out the form and add a new Pokemons
    "When a user submits the form, I want to make a POST fetch, and render a new Pokemon card to the DOM"
- As a User, I can click one of the Pokemen and delete it
    "When a user clicks on a Pokemon card, I want to make a DELETE fetch, and remove the card from the DOM"

`<When this event happens> I want to make a <this type of fetch> and <manipulate the DOM in this way>`

### Notes:
- [Documentation of using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- `body` of a fetch HAS to be a string!!
