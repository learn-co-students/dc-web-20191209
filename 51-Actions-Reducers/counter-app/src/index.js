import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './logo.svg';
import './App.css';
import {createStore} from 'redux'

//Step 2: create the reducer function
function reducer(oldState={count: 123}, action){
  console.log("oldState:", oldState, "action:", action)
  switch (action.type) {
    case "INCREMENT":
      return {count: oldState.count + action.payload}
    case "DECREMENT":
      return {count: oldState.count - action.payload}
    default:
      return oldState
  }
}

//Step 1: creating the store
const store = createStore(reducer)
//store.dispatch() store.getState()

console.log("what is the state in the store?", store.getState().count )

class App extends Component {
  // componentDidMount() {
  //   store.subscribe(() => this.forceUpdate())
  // }

  render() {
    return (
      <div className="App">
        <Header/>
        <Counter/>
      </div>
    );
  }
}

class Header extends Component {

  render() {
    return (
      <header className="App-header">
        <h1>{store.getState().count}</h1>

        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>

      </header>
    );
  }
}

//dispatch an action
//store.dispatch(  {}  )
class Counter extends Component {
  increment = (num) => {
    store.dispatch( {type: "INCREMENT", payload: num} )
  };

  decrement = (num) => {
    store.dispatch( {type: "DECREMENT", payload: num} )
  };

  render() {
    return (
      <div className="Counter">
      <button onClick={()=>this.decrement(5)}> -5 </button>
      <button onClick={()=>this.decrement(1)}> - </button>
      <button onClick={()=>this.increment(1)}> + </button>
      <button onClick={()=>this.increment(3)}> +3 </button>
        <h3>{`The current count is less than ${store.getState().count + (5 - (store.getState().count % 5))}`}</h3>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
