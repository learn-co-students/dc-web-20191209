import React from 'react'

//functional component
const PaintingCard = ({painting: {image, title, dimensions: {height, width}, artist: {name}}}) => {
  // let {painting: {image, title, dimensions: {height, width}, artist: {name}}} = props

  return (
    <div className="ui card">
      <div>
        <img src={image} alt={title}/>
      </div>
      <p>{title} by {name}</p>
      <p>Height: {height} x Width: {width}</p>
    </div>
  )
}

export default PaintingCard

/*

*/
