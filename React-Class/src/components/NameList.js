import React from 'react'
import Person from './destructureProps/Person'

function NameList() {
    const names = ['Bruce', 'Clark', 'Diana', 'Bruce'];
    // const persons = [
    //     {
    //         id: 1,
    //         name: 'Bruce',
    //         age: 21,
    //         skill: 'React'
    //     },
    //     {
    //         id: 2,
    //         name: 'Clark',
    //         age: 23,
    //         skill: 'Angular' 
    //     },
    //     {
    //         id: 3,
    //         name: 'Diana',
    //         age: 21,
    //         skill: 'Vue'
    //     }
    // ]
    // const personsList = persons.map(person => (
    //        <Person key={person.name} person={person}/>//key is not accessible in child component
    //     ))

    const namesList = names.map((name, index) => <h1 key={index}>{index} {name}</h1>)
    
    return <div>{namesList}</div>
}

export default NameList
