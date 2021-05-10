import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            {/* <button onClick={props.greetHandler}>Greet Parent</button> */}
            <button onClick={() => props.greetHandler('child')}>Greet Parent</button> 
             {/* passing parameter in simplest way */}
        </div>
    )
}

export default ChildComponent
