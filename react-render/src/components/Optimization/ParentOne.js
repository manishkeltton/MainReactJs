import React, { useState } from 'react'

export const ParentOne = ({children}) => {

    const [count, setCount] = useState(0);

    console.log('ParentOne UseState Render')

    return (
        <div>
            <button onClick={() => setCount((count) => count+1)}>Count - {count}</button>
            {/* <button onClick={() => setCount(0)}>Count - 0</button>
            <button onClick={() => setCount(5)}>Count - 5</button> */}
            {/* it is basic technic use for Optimization. hence it is run one time  */}
            {children}  
        </div>
    )
}
