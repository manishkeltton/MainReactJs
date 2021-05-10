import React, { useState } from 'react'
import { MemoizedChildTwo } from './ChildTwo';

export const ParentTwo = () => {

    const [count, setCount] = useState(0);
    const [name, setName] = useState('Manish')

    console.log('ParentTwo UseState Render')

    return (
        <div>
            <button onClick={() => setCount((count) => count+1)}>Count - {count}</button>
            <button onClick={() => setName('Rudra Sharma')}>Change Name - {name}</button>
            {/* <button onClick={() => setCount(0)}>Count - 0</button>
            <button onClick={() => setCount(5)}>Count - 5</button> */}
            <MemoizedChildTwo name={name}/>
        </div>
    )
}
