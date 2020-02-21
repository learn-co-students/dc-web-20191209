import React from 'react'
import HogCard from "./HogCard"

const Pigpen = (props) => {
    return (
        <div className="ui cards">
            {props.hogs.map(hog => <HogCard key={hog.name} hog={hog}/>)}
        </div>
    )
}

export default Pigpen