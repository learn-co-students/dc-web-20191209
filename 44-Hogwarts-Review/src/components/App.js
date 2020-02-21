import React, { Component } from "react"
import "../App.css"
import Nav from "./Nav"
import Pigpen from "./Pigpen"
import Controls from "./Controls"
import hogs from "../porkers_data"

class App extends Component {
  constructor() {
    super()
    this.state = {greased: false, sort: 'name'}
  }

  handleGreasedChange = () => {
    let greased = this.state.greased
    this.setState({greased: !greased})
  }

  getGreased = () => {
    return hogs.filter(hog => this.state.greased ? hog.greased : "zebra")
  }

  handleSortChange = (value) => {
    this.setState({sort: value})
  }
  
  getSorted = () => {
    let value = this.state.sort
    return this.getGreased().sort((hog1, hog2) => hog1[value] > hog2[value] ? 1 : -1)
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <div className="main-wrapper">
          <Controls 
            greased={this.state.greased}
            sort={this.state.sort}
            handleGreasedChange={this.handleGreasedChange}
            handleSortChange={this.handleSortChange}
          />
          <Pigpen hogs={this.getSorted()}/>
        </div>
      </div>
    )
  }
}

export default App
