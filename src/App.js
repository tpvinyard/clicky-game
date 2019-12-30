import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

class App extends Component {

  state = {
    //characters: characters,
    pickedCharacters: [],
    topScore: 0
  }

  checkGuess = (name) => {
    const newState = { ...this.state };
    if (newState.pickedCharacters.includes(name)) {
      newState.pickedCharacters = []
      alert("you lose");
    } else {
      newState.pickedCharacters.push(name);
      this.setState({ newState })
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Made it!</h1>
        </header>
      </div>
    )
  }
}

export default App;
