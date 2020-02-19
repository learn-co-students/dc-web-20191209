import React from 'react'

//functional components, really simple, really dumb
const PaintingDetails = (props) => {
  console.log("what is props for PaintingDetails?", props)
  let {shownPainting: {title, image, artist: {name}, dimensions: {height, width}}} = props
  return (
    <div className="ui card">
    	<div>
    		<img alt={title} src={image} />
    	</div>
    	<p>{title} by {name}</p>
    	<p>Height: {height} x Width: {width}</p>
    </div>
  )
}

export default PaintingDetails
