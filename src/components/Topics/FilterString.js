import React, { Component } from 'react';

// div - className=”puzzleBox filterStringPB”

// The first span - className=”puzzleText”

// input - className=”inputLine”

// button - className=”confirmationButton”

// The last span - className=”resultsBox filterStringRB”

export default class FilterString extends Component {
    state = {
        filteredArray: [],
        userInput: "",
        unFilteredArray: ["string", "boolean", "object"]
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleClick = event => {
        let filter = this.state.userInput;
        let filtered = this.state.unFilteredArray.filter(string => {
            if (string.includes(filter)) {
                return string
            }
        })
        this.setState({
            ...this.state,
            filteredArray: [...filtered],
            userInput: ""
        })
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
               <h4>Filter String</h4> 
                <span className="puzzleText">
                    {this.state.unFilteredArray.map(string => <div>{string}</div>)}    
                </span>    
               <input type="text" name="userInput" className="inputLine" onChange={this.handleChange} value={this.state.userInput} />
               <button onClick={this.handleClick} className="confirmationButton">Filter</button>
               <span className="resultsBox filterStringRB">
               {    this.state.filteredArray.map(string => <div>{string}</div>)} 
               </span>
            </div>
        )
    }
}
