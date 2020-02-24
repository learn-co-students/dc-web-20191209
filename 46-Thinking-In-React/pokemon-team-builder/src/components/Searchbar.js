import React from 'react'

const Searchbar = (props) => {
  return <input
    className="search"
    placeholder="Search..."
    onChange={props.onSearch}
  />
}

export default Searchbar
