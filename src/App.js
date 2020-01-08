import React, {Component} from 'react';
import CharacterCard from './components/CharacterCard/CharacterCard';
import NavBar from './components/NavBar';
import Score from './components/Score';
import characters from './characters.json';
import Modal from 'react-modal';
import './App.css';
import { HashRouter } from 'react-router-dom';

class App extends Component {

  state = {
    characters: characters,
    pickedCharacters: [],
    topScore: 0,
    message: "",
    modalIsOpen: false
  }

  isPicked = event => {
    const name = event.target.attributes.getNamedItem('name').value
    console.log(event.target.attributes.getNamedItem('name').value)
    console.log(this.state)
    this.shuffleCharacters();
    this.checkGuess(name, this.updateTopScore);
  }

  updateTopScore = (newState, cb) => {
    if (newState.pickedCharacters.length > newState.topScore) {
      newState.topScore++;
      this.setState({ topScore: newState.topScore })
    }
    cb(newState);
  }

  shuffleCharacters = () => {
    this.setState({characters: this.shuffleArray(this.state.characters)})
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }
 
  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }
 
  closeModal() {
    this.setState({modalIsOpen: false});
  }

  shuffleArray = (array) => {
    let i, j, x;
    for (i = array.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = array[i];
      array[i] = array[j];
      array[j] = x;
    }
    return array;
  }

  checkGuess = (name, cb) => {
    const newState = { ...this.state };
    if (newState.pickedCharacters.includes(name)) {
      newState.message = `You already chose that character. Game Over!`
      newState.pickedCharacters = []
      alert(`You already chose that character. Game Over!`)
      this.setState({ message: newState.message})
      this.setState({ pickedCharacters: []})
    } else {
      newState.pickedCharacters.push(name);
      this.setState({ pickedCharacters: newState.pickedCharacters })
    }
    cb(newState, this.checkWin)
  }

  checkWin = (newState) => {
    if(newState.pickedCharacters.length === 12) {
      newState.message = `You win! Congratulations`
      alert(`You win! Congratulations`)
      newState.pickedCharacters = [];
      this.setState({ message: newState.message})
      this.setState({ pickedCharacters: [] });
    }
  }

  render() {
    return (
      <HashRouter basename='/'>
        <div>
          <NavBar/>
          {/* <Modal
            message={this.state.message}
          /> */}
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
      </HashRouter>
    )
  }
}

export default App;
