import React, { Component } from 'react';
import './App.css';
import Wrapper from './components/Wrapper'
import Header from './components/Header'
// import Instructions from './components/Instructions'
import Card from './components/Card'
import cards from "./cards.json";

class App extends Component {
  // PASSING IN CARDS.JSON
  state = {
    cards
  };
  // CHECK FOR CLICKED VALUE
  hasBeenClicked = id => {
    // const cards = this.state.cards.filter(card => card.id !== id);
    // Set this.state.friends equal to the new friends array
    // this.setState({ cards });
    console.log(this.state.clicked.indexOf(id))
  };

  render() {
    return (
      <Wrapper>
        <Header>NFL Collectible Cards</Header>
        {this.state.cards.map(card => (
          <Card
            hasBeenClicked={this.hasBeenClicked}
            id={card.id}
            key={card.id}
            name={card.name}
            image={card.image}
            clicked={card.clicked}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
