import React, {Component} from 'react'
import {connect} from 'react-redux'

//Trick Header into thinking it has a prop called color
class Header extends Component {
  render() {
    return (<header className="App-header" style={{color: this.props.color}}>
        <h1 className="App-title">Welcome to React</h1>
        <h3>{`The current count is less than ${this.props.countValue + (5 - (
          this.props.countValue % 5))}`}</h3>
      </header>);
  }
}
//mapStateToProps is a function
//purpose is to explain HOW we want to connect our component to store
const mapStateToProps = (state) => {
  return {
    countValue : state.count
  }
}
//takes in the parameter of state
//this func needs to return an object
//that object needs to map prop: state

// const withCount = connect(mapStateToProps)
// const BetterHeader = withCount(Header)
// export default BetterHeader
export default connect(mapStateToProps)(Header)

// function withBlue(SomeComponent){
//   class EnhancedComponent extends React.Component{
//     render(){
//       return <SomeComponent {...this.props} color="blue"/>
//     }
//   }
//   return EnhancedComponent
// }
//
// //Try to create a BlueHeader that looks just like Header but is blue
// const BlueHeader = withBlue(Header);
