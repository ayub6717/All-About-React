import React, { Component } from 'react';

class Lifecycle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0,
        };
        console.log('Constructor called');
    }
    
  render() {
    console.log('Render called');
    return (
      <div>
          <h3>React Lifecycle Methods</h3>
          <p>Count : {this.state.count} </p>
          <button onClick={()=> this.setState({count: this.state.count + 1})} >
            Incremwnt
          </button>
      </div>
    );
  }
}

export default Lifecycle;
