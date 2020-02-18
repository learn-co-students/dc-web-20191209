import React from 'react';
import '../App.css';
import Navbar from './Navbar'
import PaintingsContainer from './PaintingsContainer'

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Navbar
          title="Nemo's paintings"
          subtitle="I have one fin"
          color="yellow"
        />
        <PaintingsContainer />
      </div>
    );
  }
}

export default App;
