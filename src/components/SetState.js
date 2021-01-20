import React, { Component } from 'react'

class Count extends Component{

constructor(props) {
    super(props)
    this.state = {
        count: 0
    }
}

    increament(){
        // this.Setstate(
        //     {
        //     count: this.state.count + 1
        // },
        // () => {
        //     console.log('callback value', this.state.count)
        // }
        // )

        this.setState(prevState => ({
            count: prevState.count + 1
        }))
        console.log(this.state.count)
    }
        increamentFive(){
            this.increament()
            this.increament()
            this.increament()
            this.increament()
            this.increament()
        }

    render() {
        return(
            <div>
                <div>
                    count { this.state.count }
                </div>
                <button onClick={() => this.increamentFive()}>+</button>
            </div>
        )
    }




}

export default Count