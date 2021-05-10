import React, { useState, useEffect } from 'react'

function HookCounterOne() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        console.log("useEffect-- Document Update")
        document.title = `Clicked ${count} times`
    },[])

    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            <button onClick={()=>setCount(count+1)}>Hook Count {count} times </button>
        </div>
    )
}

export default HookCounterOne
