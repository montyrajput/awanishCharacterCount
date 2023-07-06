import {Component} from 'react'
import {v4} from 'uuid'
import UserInput from './components/UserInput'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    userInputsList: [],
    userInput: '',
  }

  onChangeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  onAddUserInput = event => {
    event.preventDefault()
    const {userInput} = this.state
    const newUserInput = {
      id: v4(),
      userEnteredText: userInput,
      textLength: userInput.length,
    }
    this.setState(prevState => ({
      userInputsList: [...prevState.userInputsList, newUserInput],
      userInput: '',
    }))
  }

  renderUserInputs = () => {
    const {userInputsList} = this.state
    return userInputsList.length === 0 ? (
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
        alt="no user inputs"
        className="image-desing"
      />
    ) : (
      userInputsList.map(eachItem => (
        <UserInput key={eachItem.id} userInputDetails={eachItem} />
      ))
    )
  }

  render() {
    const {userInput} = this.state
    return (
      <div className="bg-container">
        <div className="panel">
          <div className="info">
            <h1 className="heading">
              Count the characters like a <br />
              Boss...
            </h1>
          </div>
          <ul className="user-input-list">{this.renderUserInputs()}</ul>
        </div>
        <div className="right-panel">
          <h1 className="counter-heading">Character Counter</h1>
          <form className="input-container" onSubmit={this.onAddUserInput}>
            <input
              type="text"
              value={userInput}
              onChange={this.onChangeUserInput}
              placeholder="Enter the characters here"
              className="input-desing"
            />
            <button type="button" className="button">
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default App
