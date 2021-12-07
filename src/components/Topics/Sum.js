import React, { Component } from 'react';


export default class Sum extends Component {
    state = {
        num1: 0,
        num2: 0,
        sum: null
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleClick = event => {
        let num1 = parseInt(this.state.num1);
        let num2 = parseInt(this.state.num2);
        let sum = num1 + num2;
        this.setState({ sum: sum })
    }

    render() {
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input type="number" name="num1" value={this.state.num1} onChange={this.handleChange} className="inputLine" />
                <input type="number" name="num2" value={this.state.num2} onChange={this.handleChange} className="inputLine" />
                <button onClick={this.handleClick} className="confirmationButton">Add</button>
                <span className="resultsBox">{this.state.sum}</span>
            </div>
        )
    }
}
