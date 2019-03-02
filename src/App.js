import React, { Component } from 'react';
import './App.css';
import Wrapper from './components/Wrapper'
import Header from './components/Header'
// import Instructions from './components/Instructions'
import Card from './components/Card'
import cards from "./cards.json";

class App extends Component {
  state = {
    cards
  };
  render() {
    return (
      <Wrapper>
        <Header>NFL Collectible Cards</Header>
        {this.state.cards.map(card => (
          <Card
            id={card.id}
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
