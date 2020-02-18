import React from 'react'
import PaintingCard from './PaintingCard'
import paintingsArray from '../data/paintings'

//is going to hold the paintings data
//is going to manage the PaintingCard components
//class component
class PaintingsContainer extends React.Component{
  render(){
    console.log("paintingsArray:", paintingsArray)
    return (
      <div>
        {
          paintingsArray.map(  (paintingObj) => <PaintingCard
            painting={paintingObj}
            key={paintingObj.id}
          />   )
        }
      </div>
    )
  }
}

export default PaintingsContainer
