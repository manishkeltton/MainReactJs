import React, { useContext } from 'react'
import { CountContext } from '../../../App'
import ComponentE from './ComponentE';

function ComponentD() {

    const countContext = useContext(CountContext);
    return (
        <div>
            Component D - {countContext.countState}
            <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
            <button onClick={() => countContext.countDispatch('decrement')}>Deccrement</button>
            <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
            <ComponentE />
       </div>
    )
}

export default ComponentD
