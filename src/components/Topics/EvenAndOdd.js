import React, { Component } from 'react';

export default class EvenAndOdd extends Component {
    state = {
        evenArray: [],
        oddArray: [],
        userInput: ""
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleClick = event => {
        let numbers = this.state.userInput.split(",");
        let evens = [];
        let odds = [];
        
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] % 2 === 0) {
                evens.push(numbers[i])
            } else {
                odds.push(numbers[i])
            }
        }
        
        this.setState({
            userInput: "",
            evenArray: [...evens],
            oddArray: [...odds]
        })
    }

    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
               <h4>Even and Odd</h4>
               <input name="userInput" type="text" className="inputLine" value={this.state.userInput} onChange={this.handleChange} />
               <button className="confirmationButton" onClick={this.handleClick}>Confirm</button>
               <span className="resultsBox">{this.state.evenArray.join(",")}</span>
               <span className="resultsBox">{this.state.oddArray.join(",")}</span>
            </div>
        )
    }
}
