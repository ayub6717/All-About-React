import React, { Component } from 'react'
class WillRenove extends Component{
    componentDidMount(){
        console.log('Child: componentDidMount called');
    }

    componentWillUnmount(){
        console.log('Child: componentWillUnmount called');
    }

    render() {
        return <p>I will Remove</p>;
    }
}
class Shouldupdate extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0,
      };
      console.log('Constructor called');
      this.divRef = React.createRef();
    }

    shouldComponentUpdate(nextProp, nextState){
        console.log('shouldComponentUpdate called');
        return nextState.count <= 5;
    }

    componentDidMount(){
        console.log('componentDidMount called');
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
                {this.state.count % 2 === 0 && <WillRenove />}
                <button onClick={() => this.increament()} >
                    ADD
                </button>
            </div>
        )
    }
}

export default Shouldupdate
