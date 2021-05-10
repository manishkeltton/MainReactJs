import React, {useState} from 'react'

const initialState = {
    fname: 'Bruce',
    lname: 'Wayne'
}

export const ObjectUseState = () => {

    const [person, setPerson] = useState(initialState)

    const changeName = () => {
        /** @wrong habit  
         person.fname = 'CLerk'
         person.lname = 'SHarm ji'
         */

         const newPerson = {...person}
         newPerson.fname = 'Rudra'
         newPerson.lname = 'Sharma'
         console.log(newPerson)
         setPerson(newPerson)
    }

    console.log('ObjectUseState')

    return (
        <div>
            <button onClick={changeName}>{person.fname} {person.lname}</button>
        </div>
    )
}
