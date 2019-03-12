import React, { Component } from 'react';
import './App.css';
import Wrapper from './components/Wrapper'
import Header from './components/Header'
import Instructions from './components/Instructions'
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
    // DECONSTRUCTING THE STATE
    const { clickedCards, currentScore, topScore } = this.state

    // GETTING CLICKED CARD'S ID
    let clickedId = id

    // STARTING CURRENT SCORE
    this.setState({currentScore: currentScore + 1})

    // SHUFFLE CARDS AFTER FIRST CLICK
    this.shuffleCards()

    // CHECK IF CARD IS IN CLICKED CARDS ARRAY
    if (clickedCards.indexOf(clickedId) > -1) {
      // CHECK IF CURRENT SCORE IS GREATER THAN TOP SCORE
      if (currentScore > topScore) {
        // IF SO, SET CURRENT SCORE AS TOP SCORE
        this.setState({topScore: currentScore})
      }
      // IF IN CLICKED CARDS ARRAY, RUN GAME OVER!
      this.gameOver(currentScore, topScore)
      
    } else if(currentScore < 12) {
      // IF NOT IN CLICKED CARDS ARRAY, PUSH CARD TO CLICKED CARDS ARRAY
      clickedCards.push(id)
      // CHECK IF CURRENT SCORE IS GREATER THAN TOP SCORE
      if(currentScore > topScore) {
        // IF SO, INCREMENT CURRENT SCORE AND SET CURRENT SCORE AS TOP SCORE
        this.setState({currentScore: currentScore + 1})
        this.setState({ topScore: currentScore})
      }
      
      // RUN SHUFFLE CARDS
      this.shuffleCards()
    }
  };

  // SHUFFLE CARDS WITH FISHER-YATES ALGO
  shuffleCards = ()=> {
    const cards = [].concat(this.state.cards)
    for (let i = cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    this.setState({ cards });
  }

  // GAME OVER
  gameOver = (currentScore, topScore)=> {
    // ALERT GAME OVER WITH CURRENT SCORE AND TOP SCORE
    // CHECK IF CURRENT SCORE IS GREATER THAN TOP SCORE
    if(currentScore > 11) {
      alert(`Game won! Current Score: ${currentScore} Top Score: ${topScore}`)
    } else if(currentScore > topScore) {
      alert(`Got a better score than last round. Current Score: ${currentScore} Top Score: ${topScore}`)
    } else {
      alert(`Oh, you gotta do better than that! Current Score: ${currentScore} Top Score: ${topScore}`)
    }
    this.setState({
      // SET CURRENT SCORE TO 0 AND CLEAR OUT THE CLICKED CARDS ARRAY
      currentScore: 0,
      clickedCards: []
    })
  }

  render() {
    return (
      <Wrapper>
        <Header 
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
        />
        <Instructions />
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
