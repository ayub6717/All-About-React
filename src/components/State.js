import React, { Component } from 'react'

class StateMessage extends Component {
    constructor() {
        super()
        this.state = {
            message: 'Hey I am'
        }
    }

    changeMessage() {
        this.setState({
            message: 'Rohan'
        })
    }

    render(){
        return(
            <div>
                <h1> {this.state.message} </h1>
                <button onClick={() => this.changeMessage()} >Click</button>
            </div>
        )
    }
}

export default StateMessage