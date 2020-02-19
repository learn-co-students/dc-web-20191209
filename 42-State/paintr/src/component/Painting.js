import React from 'react'

const Painting = (props) => {
  let {paintingObj: {title, artist: {name}}} = props
  // console.log("Painting props:", props.paintingObj)
  return (
    <div className="ui card" onClick={()=>{ props.changeDetails(props.paintingObj) }}>
      <p>{`${title} by ${name}`}</p>
    </div>
  )
}

export default Painting
