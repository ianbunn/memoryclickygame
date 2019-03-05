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
      this.gameOver()
      alert("game over")
    } else {
      clickedCards.push(id)
      this.shuffleCards()
      console.log(clickedCards)
    }
  };
  // SHUFFLE CARDS AFTER EVERY CLICK
  shuffleCards = ()=> {
    const cards = [].concat(this.state.cards)
    console.log(cards)
    for (let i = cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    this.setState({ cards });
  }
  // GAME OVER
  gameOver = ()=> {
    this.setState({
      currentScore: 0,
      clickedCards: []
    })
  }

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
