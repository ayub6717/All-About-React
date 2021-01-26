import React, { Component, Fragment } from 'react'

class Frag extends Component {
    render() {
        return (
            <>  
                {/* we can use 3 different way */}

                <h1>Hey I'm Ayub</h1>
                <div>
                    <h1>Hey I'm Ayub</h1>
                </div>
                <React.Fragment>
                    <h1>Hey I'm Ayub</h1>
                </React.Fragment>

                <Fragment>
                    <h1>Hey I'm Ayub</h1>
                </Fragment>
            </>

        )
    }
}

export default Frag
