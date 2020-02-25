import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";
import MoneyForm from "./components/MoneyForm";

// Endpoint!
const API = "http://localhost:3000/sushis";

let counter = 1;

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //
  //   };
  // }

  state = {
    sushis: [],
    eatenSushis: [],
    budget: 100,
    index: 0
  };

  componentDidMount() {
    fetch(API)
      .then(r => r.json())
      .then(sushis => this.setState({ sushis: sushis }));
  }

  getFourSushi = () => {
    return this.state.sushis.slice(this.state.index, this.state.index + 4);
  };

  handleMoreBtn = () => {
    // on click, show next 4 sushi
    let newIndex =
      this.state.sushis.length - 4 === this.state.index
        ? 0
        : this.state.index + 4;
    console.log(newIndex);
    this.setState({ index: newIndex });
  };

  handleEatSushi = sushi => {
    // add sushiObj into eatenSushi
    console.log("eating sushi ", sushi.name);
    // check if price of sushi isn't beyond our budget
    if (!this.state.eatenSushis.includes(sushi)) {
      if (sushi.price < this.state.budget) {
        let newEatenSushisArr = [...this.state.eatenSushis, sushi];
        let newBudget = this.state.budget - sushi.price;
        this.setState({ eatenSushis: newEatenSushisArr, budget: newBudget });
        // reduce the money in our budget/wallet
      } else {
        alert(
          "You're broke, get money and come back. Or don't come back. Thank you!"
        );
      }
    }
  };

  handleGitMoMoney = (e, amtToAdd) => {
    e.preventDefault();
    console.log("adding $", amtToAdd);
    // grab amtToAdd and update budget in state
    let newBudget = this.state.budget + amtToAdd;
    this.setState({ budget: newBudget });
  };

  render() {
    console.log("render ", counter);
    counter++;
    return (
      <div className="app">
        <MoneyForm handleGitMoMoney={this.handleGitMoMoney} />
        <SushiContainer
          sushis={this.getFourSushi()}
          handleMoreBtn={this.handleMoreBtn}
          handleEatSushi={this.handleEatSushi}
          eatenSushis={this.state.eatenSushis}
        />
        <Table
          budget={this.state.budget}
          eatenSushis={this.state.eatenSushis}
        />
      </div>
    );
  }
}

export default App;
