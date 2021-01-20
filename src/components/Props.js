import React from 'react'

const Props = (props) => {
    return (
        <div>
        <h1>Hi {props.name} {props.email} </h1>
        {props.children}
    </div>
    )
}



export default Props