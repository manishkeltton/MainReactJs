import React, { useState } from 'react'
import { ChildOne } from './ChildOne'
import { ParentOne } from './ParentOne'

export const GrandParent = ({children}) => {
    const [newCount, setNewCount] = useState(0)
    console.log("GrandParent render")
    return (
        <div>
            <button onClick={() => setNewCount(newCount=>newCount+1)}>Counter - {newCount}</button>
            {/* {children} */}
            <ParentOne newCount={newCount}>
               <ChildOne />
            </ParentOne>
        </div>
    )
}
