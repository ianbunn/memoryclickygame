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
    cards: cards,
    currentScore: 0,
    topScore: 0,
    clickedCards: []
  };
  // CHECK FOR CLICKED VALUE
  hasBeenClicked = id => {
    const { clickedCards } = this.state
    let clickedId = id
    if (clickedCards.indexOf(clickedId) > -1) {
      return alert("game over")
    } else {
      clickedCards.push(id)
      console.log(clickedCards)
    }
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
