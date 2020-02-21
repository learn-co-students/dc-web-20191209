import React from 'react'

const Controls = (props) => {
    return (
        <div className="filterWrapper">
            <button
                className={props.greased ? "ui red button" : "ui button"}
                onClick={props.handleGreasedChange}
            >Greased Only</button>
            <div id={"sortLabel"} className="ui basic big horizontal label">Sort By:</div> 
            <button
                className={props.sort === 'name' ? "ui red button" : "ui button"}
                onClick={() => props.handleSortChange('name')}
            >Name</button>
            <button
                className={props.sort === 'weight' ? "ui red button" : "ui button"}
                onClick={() => props.handleSortChange('weight')}
            >Weight</button>
        </div>
    )
}

export default Controls