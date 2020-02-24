import React, { Component } from 'react';
import '../App.css';
import Profile from '../components/Profile'
import PokemonList from './PokemonList'
import Searchbar from '../components/Searchbar'

class App extends Component {
  constructor(){
    super()
    this.state = {
        profile: null,
        team: [],
        allPokemon: [],
        searchText: ""
    }
  }

  componentDidMount(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=1000')
    .then(res => res.json())
    .then(data => {
      // console.log(data.results)
      this.setState({
        allPokemon: data.results
      })
    })
  }

  onSearch = (event) => {
    this.setState({searchText: event.target.value})
  }

  //state changing callback for Profile
  onChangeProfile = (pokemon) => {
    fetch(pokemon.url)
    .then(res => res.json())
    .then(data => {
      this.setState({profile: data})
    })
  }

  //write the funtion to update the team state
  //state changing callback function
  addPokemonToTeam = (pokemon) =>{
    //check to make sure each name is unique
    if(this.state.team.length < 6){

      //check the team's count/length
      // let existingPokemon = this.state.team.find(p => p.name === pokemon.name)

      if ( this.state.team.includes(pokemon) ){
        alert('Cannot add same pokemon twice')
      }else{
        this.setState({
          team : [...this.state.team, pokemon]
        })
      }

    }else{
        alert("Can't add more than 6 pokemon, you silly")
    }
  }

  removePokemonFromTeam = (pokemon) => {
    //update my team state to be
    //one less pokemon

    //splice, find the index of pokemon in the Team
    // let index = this.state.team.findIndex(p => p.name === pokemon.name)
    // let newTeam = [...this.state.team]
    // newTeam.splice(index, 1)
    let newTeam = this.state.team.filter(p => p !== pokemon)
    this.setState({
      team: newTeam
    })
  }

  onResetTeam = () => {
    this.setState({team: []})
  }

  render() {
    let filteredPokemon = this.state.allPokemon.filter(p => p.name.includes(this.state.searchText))
    return (
      <div className="App">
        <img alt="Pokemon" width="200" src="https://d33wubrfki0l68.cloudfront.net/42936b3e4d03c9b7c5927e3752a36cef7ff8bdf0/53627/images/pokemon.png"/>
        <PokemonList
          header="Team"
          pokemons={this.state.team}
          alterTeam={this.removePokemonFromTeam}
          onChangeProfile={this.onChangeProfile}
        />
        <button onClick={this.onResetTeam}>RESET</button>
        <br />
        {
          this.state.profile ? <Profile shownPokemon={this.state.profile}/> : null
        }
        <Searchbar onSearch={this.onSearch}/>
        <PokemonList
          header="Pokemon List"
          pokemons={filteredPokemon}
          alterTeam={this.addPokemonToTeam}
          onChangeProfile={this.onChangeProfile}
        />
      </div>
    );
  }
}

export default App;
