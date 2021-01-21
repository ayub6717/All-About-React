import React, { Component } from 'react'

class ConditionalRendering extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         login: true
      }
    }
    
    render() {

        //*******you should use shortCircuit operator approach or ternary approach*******
        return this.state.login && <div>Welcome Ayub</div>

        // *******you should use this(Ternary Operator) approach*******
        // return this.state.login ? (
        //     <div>Welcome Ayub</div>
        // ) : (
        //     <div>Welcome Rohan</div>
        // )

        // if(this.state.login) {
        //     return (
        //         <div>
        //             Welcome Ayub
        //         </div>
        //     )
        // } else {
        //     return (
        //         <div>
        //             Welcome Rohan
        //         </div>
        //     )
        // }


        // return (
        //     <div>
        //        <div> Welcome Ayub</div>
        //        <div> Welcome Rohan</div>
        //     </div>
        // )
    }
}

export default ConditionalRendering
