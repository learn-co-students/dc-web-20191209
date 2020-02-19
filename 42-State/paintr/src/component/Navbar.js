import React from 'react'

const Header = () => {
  return (
    <div className="ui inverted blue menu navbar">
      <a href="/" className="ui item">
        <h2 className="ui header">
          <i className="paint brush icon"></i>
          <div className="content">Painter</div>
          <div className="sub header">List of Paintings</div>
        </h2>
      </a>
    </div>
  )
}

export default Header
