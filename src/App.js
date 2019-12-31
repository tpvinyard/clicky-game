import React, {Component} from 'react';
import CharacterCard from './components/CharacterCard';
import './App.css';

class App extends Component {

  state = {
    //characters: characters,
    pickedCharacters: [],
    topScore: 0
  }

  isPicked = event => {
    const name = event.target.attributes.getNamedItem("name").value;
    this.checkGuess(name);
  }

  updateTopScore = (newState) => {
    if (newState.pickedCharacters.length > newState.topScore) {
      newState.topScore++;
      this.setState({ newState })
    }
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
      <div>
        {this.state.pickedCharacters.map(character => (
          <CharacterCard
            key={character.id}
            id={character.id}
            name={character.name}
            image={character.image}
            isPicked={this.isPicked}
          />
        ))}
      </div>
    )
  }
}

export default App;
