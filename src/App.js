import React, {Component} from 'react';
import CharacterCard from './components/CharacterCard/CharacterCard';
import NavBar from './components/NavBar';
import Score from './components/Score';
import characters from './characters.json';
import './App.css';

class App extends Component {

  state = {
    characters: characters,
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
        <NavBar/>
        <h1>Hello!</h1>
        <Score type="Score" score={this.state.pickedCharacters.length}/>
        <Score type="Top Score" score={this.state.topScore}/>
        {this.state.characters.map(character => (
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
