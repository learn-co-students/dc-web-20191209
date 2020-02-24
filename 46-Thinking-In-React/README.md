# Thinking in React

https://reactjs.org/docs/thinking-in-react.html

Step 1: Break The UI Into A Component Hierarchy
Step 2: Build A Static Version in React
Step 3: Identify The Minimal (but complete) Representation Of UI State
Step 4: Identify Where Your State Should Live
Step 5: Add Inverse Data Flow

### Let's make an app from scratch
X As a user, I should see all 151 pokemon on load of app
* When the page loads, make a GET fetch, update the state -> update the DOM

- As a user, I should be able to double click to add pokemon to team
* On double click of a pokemonCard, I want update the team state -> Dom updates

- As a user, I should be able to DBclick to remove pokemon from team
* On double click of a pokemonCard (in the team), I want to update the state -> DOM updated

- As a user, I should be able to single click any pokemon card to see their stats
* On single click of any pokemonCard, make a GET fetch, update the state -> DOM is updated

- As a user, I can search pokemon
- As a user, I can reset my pokemon team


### CSS Helpers
```
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
```

```
.details {
  display: inline-block;
  width: 70%;
  background-color: #FAFAD2;
  padding: 10px 30px 10px 30px;
  margin: 10px 10px;
}

.pokemon {
  display: inline-block;
  width: 12%;
  background-color: #FFD700;
  padding: 30px 0px 30px 0px;
  margin: 10px 10px;
}

.search {
  font-size: 1.5rem;
  width: 50%;
  border: 3px solid #fecd2f;
  color: #2d72fc;
}

.row {
  display: block;
}

.block {
  width: 30%;
  display: inline-block;
}
```

### Static components
```
<img alt="Pokemon" width="200" src="https://d33wubrfki0l68.cloudfront.net/42936b3e4d03c9b7c5927e3752a36cef7ff8bdf0/53627/images/pokemon.png"/>

<div className="card details">
  <div>
    <div className="row">PIKACHU</div>
    <div className="row">
      <div><img alt="" src="" /></div>
      <div className="block">hp: 10</div>
      <div className="block">speed: 10</div>
      <div className="block">attack: 10</div>
      <div className="block">defense: 10</div>
      <div className="block">sp-attack: 10</div>
      <div className="block">sp-defense: 10</div>
    </div>
  </div>
</div>
```
