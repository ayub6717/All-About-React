import React, { Component } from 'react'

export class Update extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        message: 'Hey I am'
    }
      console.log('Constructor called');
      this.divRef = React.createRef();
    }

    componentDidMount(){
        console.log('componentDidMount called');
        console.log(this.divRef.current);
    }

    componentDidUpdate(){
        console.log('componentDidUpdate called');
    }

    changeMessage() {
        this.setState({
            message: 'Rohan'
        })
    }
    
    render() {
        console.log('Render called');
        console.log('Ref', this.divRef);

        return (
            <div ref={this.divRef}>
                <h1> {this.state.message} </h1>
                <h1> {this.props.name} </h1>
                {this.props.children}
            <   button onClick={() => this.changeMessage()} >Click</button>
            </div>
        )
    }
}

export default Update

