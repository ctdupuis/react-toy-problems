import React, { Component } from 'react';

export default class FilterObject extends Component {
    state = {
        userInput: "",
        filteredArray: [],
        unFilteredArray: [{name: "Cody", admin: "true"}, {name: "John", age: 44}, {name: "Cosmo", color: "black with white specks"}]
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleClick = event => {
        // filter objects by key in userInput
        let filter = this.state.userInput;

        let filteredObjects = this.state.unFilteredArray.filter(obj => {
            let keys = Object.keys(obj)
            if (keys.includes(filter)) {
                return obj
            }
        })

        this.setState({
            ...this.state,
            userInput: "",
            filteredArray: [...filteredObjects]
        })
    }

    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">
                    {this.state.unFilteredArray.map((obj, idx) => {
                        let keys = Object.keys(obj)
                            return(<div key={idx}>
                                Object #{idx+1} {keys[0]}: {obj[keys[0]]} | {keys[1]}: {obj[keys[1]]}
                            </div>)
                        } 
                    )}
                  
                </span>
                <input name="userInput" value={this.state.userInput} onChange={this.handleChange} type="text" className="inputLine" />
                <button onClick={this.handleClick} className="confirmationButton">Filter</button>
                <span className="resultsBox filterObjectRB">
                    {this.state.filteredArray.map((obj, idx) => {
                        let keys = Object.keys(obj)
                            return(<div key={idx}>
                                {keys[0]}: {obj[keys[0]]} | {keys[1]}: {obj[keys[1]]}
                            </div>)
                        } 
                    )}
                </span>
            </div>
        )
    }
}
