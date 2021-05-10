import React, { useState } from 'react'

// const initialState = ['A', 'B', 'C']
const initState = ['Bruce', 'Wayne']
export const ArrayUseState = () => {
    // const [val, setVal] = useState(initialState)
    const [persons, setPersons] = useState(initState)
    // const changeValue = () => {
    //     initialState[0] = 'D'
    //     initialState[1] = 'G'
    //     initialState[2] = 'F'
    //     setVal(...initialState, initialState)
    //  }

    const handleClick = () => {
        //Because array reference does not change itself
        // persons.push('Rudra')
        // persons.push('sharma')

        const newPersons = [...persons]
        newPersons.push('Rudra')
        newPersons.push('Sharma')
        setPersons(newPersons);
    }

    console.log("ArrayUseState render")

    return (
        <div>
            {/* <button onClick={changeValue}>{initialState}</button> */}
            <button onClick={handleClick}>Click</button>
            {
                persons.map(person => (
                    <div key={person}>{person}</div>
                ))
            }
        </div>
    )
}
