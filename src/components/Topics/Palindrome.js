import React, { Component } from 'react';

// div - className=”puzzleBox filterStringPB”

// input - className=”inputLine”

// button - className=”confirmationButton”

// span - className=”resultsBox”

export default class Palindrome extends Component {
    state = {
        userInput: "",
        palindrome: ""
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleClick = event => {
        let check = this.state.userInput.split("").reverse().join("");
        if (check === this.state.userInput) {
            this.setState({
                userInput: "",
                palindrome: "This word is a palindrome"
            })
        } else {
            this.setState({
                userInput: "",
                palindrome: "This word is not a palindrome"
            })
        }
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input type="text" name="userInput" className="inputLine" onChange={this.handleChange} />
                <button onClick={this.handleClick} className="confirmationButton">Check</button>
                <span className="resultsBox">{this.state.palindrome}</span>
            </div>
        )
    }
}
