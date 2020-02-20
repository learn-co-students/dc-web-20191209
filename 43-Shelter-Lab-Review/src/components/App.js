import React from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      filters: {
        type: "all"
      }
    };
  }

  // - App should pass a **callback** prop, `onChangeType`, to `<Filters />`. This
  // callback needs to
  onChangeType = e => {
    // debugger;
    console.log("changing filter...");
    let filterValue = e.target.value;
    this.setState({ filters: { type: filterValue } });
    // update `<App />`'s `state.filters.type`
  };

  // - `<Filters />` needs a **callback** prop, `onFindPetsClick`. When the
  // `<Filters />` component calls `onFindPetsClick`, `<App />` should fetch a list
  // of pets using `fetch()`.

  onFindPetsClick = () => {
    // fetch a list
    // of pets using `fetch()`.
    let url =
      this.state.filters.type === "all"
        ? "/api/pets"
        : `/api/pets?type=${this.state.filters.type}`;
    console.log("fetching pets...");
    fetch(url)
      .then(r => r.json())
      .then(pets => this.setState({ pets: pets }));
  };

  onAdoptPet = id => {
    console.log("adopting pet with id: ", id);
    // change isAdopted attribute of pet with passed id to true
    // WITHOUT directly mutating state
    // Make A COPY of the pets array THEN make changes this pet
    // then using the setState function, CHANGE state with NEW ARRAY

    // * USING SPLICE
    // splice is DESTRUCTIVE so we need to make a copy of the pets array
    let newPetsArr = [...this.state.pets];
    // find pet being adopted
    let pet = this.state.pets.find(pet => pet.id === id);
    // make a new copy of the original old pet object
    let newPet = { ...pet, isAdopted: true };
    // find array index of pet to change
    let index = this.state.pets.findIndex(pet => pet.id === id);
    // splice takes in 3 args: first is the index, second is items to remove, third is new item to replace
    newPetsArr.splice(index, 1, newPet);
    // update state with newPetsArr, which contains updated pet
    this.setState({ pets: newPetsArr });

    // * USING MAP
    // since the return value of .map is a new array, we can map through the original pets array in state
    let mappedNewPetsArr = this.state.pets.map(pet => {
      if (pet.id === id) {
        // if pet being iterated over is the pet being adopted
        // create a copy of the pet object, with isAdopted changed to TRUE
        // and add it to the new array
        return { ...pet, isAdopted: true };
      } else {
        // if pet being iterated over is NOT the pet being adopted
        // just add the pet object to the new array
        return pet;
      }
    });
    // * TERNARY SYNTAX
    let ternaryMappedNewPetsArr = this.state.pets.map(pet =>
      pet.id === id ? { ...pet, isAdopted: true } : pet
    );
  };

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onChangeType={this.onChangeType}
                onFindPetsClick={this.onFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
