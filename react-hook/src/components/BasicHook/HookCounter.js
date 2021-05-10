import React, { useState } from 'react'

const HookCounter = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h2>Hook Counter</h2>
            <button onClick={()=>setCount(count+1)}>Hook Count {count} times </button>
        </div>
    )
}

export default HookCounter
