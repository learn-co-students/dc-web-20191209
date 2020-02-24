import React from 'react'

const Profile = (props) => {
  console.log("Profile props:", props)
  let {shownPokemon} = props
  return (
    <div className="card details">
      <div>
        <div className="row">{shownPokemon.name.toUpperCase()}</div>
        <div className="row">
          <div><img alt={shownPokemon.name} src={shownPokemon.sprites.front_shiny} /></div>
          {
            shownPokemon.stats.map(stat => {
              console.log(stat)
              return <div key={stat.stat.name} className="block">{stat.stat.name}: {stat.base_stat}</div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Profile
