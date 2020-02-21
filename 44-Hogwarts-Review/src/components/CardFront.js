import React from 'react'

const CardFront = (props) => {
    return (
        <div className="ui card" onClick={props.flip}>
            <div className="image">
                <img src={require(`../hog-imgs/${props.imgName}.jpg`)}/>
            </div>
            <div className="content">
                <div className="header">{props.hog.name}</div>
            </div>
        </div>
    )
}

export default CardFront