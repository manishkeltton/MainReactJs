import React, { useState, useMemo, useCallback } from 'react'
import { MemoizedChildFive } from './ChildFive';
import { MemoizedChildThree } from './ChildThree';

export const ParentFour = () => {

    const [count, setCount] = useState(0);
    const [name, setName] = useState('Manish')

    const person = {
        fname: 'Rishav',
        lname: 'Sharma'
    }
    
    const memoizedPerson = useMemo(() => person, [])


    const handleClick = () => { }

    const memoizedhandleClick = useCallback(handleClick, [])

    console.log('ParentFour UseState Render')

    return (
        <div>
            <button onClick={() => setCount((count) => count+1)}>Count - {count}</button>
            <button onClick={() => setName('Rudra Sharma')}>Change Name - {name}</button>
            {/* <button onClick={() => setCount(0)}>Count - 0</button>
            <button onClick={() => setCount(5)}>Count - 5</button> */}
            {/* <MemoizedChildThree name={name}>
                <strong>Hello</strong>
            </MemoizedChildThree> */}
            {/* Every time person object create new object(props reference) hence React.memo not woking */}
            {/* <MemoizedChildFive name={name} person={memoizedPerson}/> */}
            <MemoizedChildFive name={name} person={memoizedhandleClick}/>

        </div>
    )
}


