import React, {Component} from 'react'
import {connect} from 'react-redux'

//Counter was given a prop called counterValue
//if props is changing
class Counter extends Component {
  increment = (payload) => {
    this.props.dispatch({type: "INCREMENT", payload: payload})
  };

  decrement = (payload) => {
    this.props.dispatch({type: "DECREMENT", payload: payload})
  };

  render() {
    console.log("Counter's props:", this.props)
    return (
      <div className="Counter">
        <h1>{this.props.countValue}</h1>
        <button onClick={() => this.decrement(5)}> -5 </button>
        <button onClick={() => this.decrement(1)}> - </button>
        <button onClick={() => this.increment(1)}> + </button>
        <button onClick={() => this.increment(3)}> +3 </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    countValue: state.count
  }
}

export default connect(mapStateToProps)(Counter)
