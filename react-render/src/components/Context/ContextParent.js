import React, { useState } from 'react'
import { MemoizedChildA } from './ContextChildren';

export const CountContext = React.createContext()
const CountProvider = CountContext.Provider

export const ContextParent = ({children}) => {

    const [count, setCount] = useState(0);

    console.log('ContextParent UseState Render')

    return (
        <div>
            <button onClick={() => setCount((count) => count+1)}>Count - {count}</button>

            {/* <CountProvider value={count}>
                <MemoizedChildA />
            </CountProvider> */}
            <CountProvider value={count}>
                {children}
            </CountProvider>
        </div>
    )
}
