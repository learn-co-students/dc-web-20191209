import React, {Component} from 'react'
//class component
//this.props
class Navbar extends Component {
  render(){
    // console.log("Navbar's props:", this.props)
    return (
      <div className={`ui inverted ${this.props.color} menu navbar`}>
        <h2 className="ui item header">
          <i className="paint brush icon"></i>
          <div className="content">{this.props.title}</div>
          <div className="header">{this.props.subtitle}</div>
        </h2>
      </div>
    )
  }
}

export default Navbar
