import React from 'react'

const CardBack = (props) => {
    let {name, greased, specialty, weight} = props.hog
    return (
        <div className="ui card" onClick={props.flip}>

            <div className="content">
                <img id="back-image" src={require(`../hog-imgs/${props.imgName}.jpg`)}/>
                <div className="header">{name}</div>
                <div className="meta">{greased ? "Greased" : "Ungreased"}</div>
                <div className="description">
                    Specialty: {specialty}<br></br>
                    Weight: {weight}
                </div>
            </div>

            <div className="extra content">
                <span><i className="trophy icon"></i> {props.hog['highest medal achieved']}</span>
            </div>
        </div>
    )
}

export default CardBack