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
    const name = event.target.attributes.getNamedItem('name').value
    console.log(event.target.attributes.getNamedItem('name').value)
    console.log(this.state)
    this.checkGuess(name, this.updateTopScore);
  }

  updateTopScore = (newState, cb) => {
    if (newState.pickedCharacters.length > newState.topScore) {
      newState.topScore++;
      this.setState({ topScore: newState.topScore })
    }
    cb(newState);
  }

  checkGuess = (name, cb) => {
    const newState = { ...this.state };
    if (newState.pickedCharacters.includes(name)) {
      newState.pickedCharacters = []
      this.setState({ pickedCharacters: []})
      alert("you lose");
    } else {
      newState.pickedCharacters.push(name);
      this.setState({ pickedCharacters: newState.pickedCharacters })
    }
    cb(newState, this.checkWin)
  }

  checkWin = (newState) => {
    if(newState.pickedCharacters.length === 12) {
      newState.pickedCharacters = [];
      this.setState({ pickedCharacters: [] });
    }
  }

  render() {
    return (
      <div>
        <NavBar/>
        <div className="container">
          <div className="row score-info valign-wrapper">
            <div className="col m8 s12">
              <h4>Test your skills. Don't click the same image twice!</h4>
            </div>
            <div className="col m4 s12 center">
              <Score type="Score" score={this.state.pickedCharacters.length}/>
              <Score type="Top Score" score={this.state.topScore}/>
            </div>
          </div>
        </div>
        <div id="grid" className="container">
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
      </div>
    )
  }
}

export default App;
