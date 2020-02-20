import React from "react";

import Pet from "./Pet";

class PetBrowser extends React.Component {
  renderPetCards = () => {
    return this.props.pets.map((pet, index) => (
      <Pet petObj={pet} key={index} onAdoptPet={this.props.onAdoptPet} />
    ));
  };

  render() {
    return <div className="ui cards">{this.renderPetCards()}</div>;
  }
}

export default PetBrowser;
