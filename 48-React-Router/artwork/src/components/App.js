import React, { Component } from 'react';
import '../App.css';
import NavBar from './NavBar'
import PaintingsList from './PaintingsList'
import PaintingDetails from './PaintingDetails'
import About from './About'
import {Route, Switch} from 'react-router-dom'
import NotFound from './NotFound'

class App extends Component {
  constructor(){
    super()
    this.state = {
        paintings: [],
        searchTerm: ''
    }
  }

  componentDidMount(){
    fetch(`http://localhost:3000/paintings`)
    .then(response => response.json())
    .then(json => {
      this.setState({
        paintings: json
      })
    })
  }

  onSearchHandler = (event) => {
    this.setState({searchTerm: event.target.value})
  }

  onSelectPainting = (event) => {
    let paintingId = event.target.dataset.paintingId
    let selectedPainting = this.state.paintings.find(painting => painting.id === paintingId)
    this.setState({
      selectedPainting: selectedPainting
    })
  }

  render() {
    return (
      <div className="App">
        <NavBar title='Paintr' icon="paint brush" color="blue" subtitle="List of Paintings"/>
        <Switch>
          <Route path="/paintings/:id" render={(props) => {
            let id = props.match.params.id
            let foundPainting = this.state.paintings.find(p => p.id === id)
            return <PaintingDetails
              painting={foundPainting}
            />
          }}/>
          <Route path="/paintings" render={() => <PaintingsList
            onSearchHandler={this.onSearchHandler}
            filterTerm={this.state.searchTerm}
            paintings={this.state.paintings}
            onSelectPainting={this.onSelectPainting}
          />}/>
          <Route exact path="/" component={About}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    );
  }
}

/*
<PaintingDetails painting={this.state.selectedPainting}/>
<PaintingsList
  onSearchHandler={this.onSearchHandler}
  filterTerm={this.state.searchTerm}
  paintings={this.state.paintings}
  onSelectPainting={this.onSelectPainting}
/>
*/

export default App;
