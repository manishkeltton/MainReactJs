import React, { useContext } from 'react'
import { CountContext } from '../../../App'
import ComponentB from './ComponentB'

function ComponentF() {

    const countContext = useContext(CountContext);
    return (
        <div>
            Component F - {countContext.countState}
            <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
            <button onClick={() => countContext.countDispatch('decrement')}>Deccrement</button>
            <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
       </div>
    )
}

export default ComponentF
