import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = (props) => {
  return(
    <div className={`ui inverted ${props.color} menu navbar`}>
     <Link to="/" className="item">
       <h2 className="ui header">
         <i className={`${props.icon} icon`}></i>
         <div className="content">{props.title}</div>
         <div className="sub header">{props.subtitle}</div>
       </h2>
     </Link>
     <div className="item">
      <Link to="/paintings">Gallery</Link>
     </div>
   </div>
  )
}

export default NavBar
