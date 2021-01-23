import React, { Component } from 'react'

export class ComponentDid extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0,
      };
      console.log('Constructor called');
      this.divRef = React.createRef();
    }

    componentDidMount(){
        console.log('componentDidMount called');
        console.log(this.divRef.current);
    }

    increament () {
        this.setState({
            count: this.state.count+1
        })
    }
    
    render() {
        console.log('Render called');
        console.log('Ref', this.divRef);

        return (
            <div ref={this.divRef}>
                <p>Count {this.state.count} </p>
                <button onClick={() => this.increament()} >
                    ADD
                </button>
            </div>
        )
    }
}

export default ComponentDid
