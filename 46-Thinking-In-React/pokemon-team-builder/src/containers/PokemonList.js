import React from 'react'
import PokemonCard from '../components/PokemonCard'

//should get a list of pokemon pssed into it dynamically
class PokemonList extends React.Component{
  render(){
    return (
      <div>
        <h3>{this.props.header}:</h3>
        {
          this.props.pokemons.map(pokemonObj => <PokemonCard
            key={pokemonObj.name}
            pokemon={pokemonObj}
            alterTeam={this.props.alterTeam}
            onChangeProfile={this.props.onChangeProfile}
          />)
        }
      </div>
    )
  }
}

export default PokemonList
