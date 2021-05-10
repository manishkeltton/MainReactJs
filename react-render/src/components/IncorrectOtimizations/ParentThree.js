import React, { useState } from 'react'
import { MemoizedChildFour } from './ChildFour';
import { MemoizedChildThree } from './ChildThree';

export const ParentThree = () => {

    const [count, setCount] = useState(0);
    const [name, setName] = useState('Manish')

    console.log('ParentThree UseState Render')

    return (
        <div>
            <button onClick={() => setCount((count) => count+1)}>Count - {count}</button>
            <button onClick={() => setName('Rudra Sharma')}>Change Name - {name}</button>
            {/* <button onClick={() => setCount(0)}>Count - 0</button>
            <button onClick={() => setCount(5)}>Count - 5</button> */}
            {/* <MemoizedChildThree name={name}>
                <strong>Hello</strong>
            </MemoizedChildThree> */}
            <MemoizedChildFour name={name}/>
        </div>
    )
}


