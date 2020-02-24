import React from 'react'

const PokemonCard = (props) => {
  return (
    <div
      className="pokemon card"
      onDoubleClick={(e)=>props.alterTeam(props.pokemon)}
      onClick={()=>props.onChangeProfile(props.pokemon)}
    >
      {props.pokemon.name}
    </div>
  )
}

export default PokemonCard
