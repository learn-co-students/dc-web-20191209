import React from 'react'

const Searchbar = (props) => {
  return (
    <input placeholder="Search..." value={props.searchText} onChange={props.changingText}/>
  )
}

export default Searchbar
