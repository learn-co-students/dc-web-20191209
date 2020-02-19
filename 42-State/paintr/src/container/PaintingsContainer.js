import React, {Component} from 'react'
import Painting from '../component/Painting'
import paintingsData from '../data/paintings'
import PaintingDetails from '../component/PaintingDetails'
import Searchbar from '../component/Searchbar'

//class components can have state; functional components cannot
class PaintingsContainer extends Component {
  constructor(){//where you want to set up initial state
    super()
    this.state = {
      currentPainting: null,
      searchText: ""
    }
  }

  //state changing callback
  changeSearchText = (event) => {
    //this.setState() of searchText
    this.setState({searchText: event.target.value})
  }

//state changing callback function
  changeCurrentPainting = (selectedPainting) => {
    console.log(selectedPainting)
    this.setState({
      currentPainting: selectedPainting
    })
  }

  render(){
    let filteredPainting = paintingsData.filter(painting => painting.title.includes(this.state.searchText))
    console.log(filteredPainting)
    return (
      <div>
        <Searchbar searchText={this.state.searchText} changingText={this.changeSearchText}/>
        {
          this.state.currentPainting ? <PaintingDetails shownPainting={this.state.currentPainting}/> : null
        }
        {
          filteredPainting.map(painting =>
          <Painting
            changeDetails={this.changeCurrentPainting}
            key={painting.id}
            paintingObj={painting}
          />)
        }
      </div>
    )
  }
}

//1. write the class syntax
//2. Create render method
//3. Make return of render method same as return of your old functional component

export default PaintingsContainer
