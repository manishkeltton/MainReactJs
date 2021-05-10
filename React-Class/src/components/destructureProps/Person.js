import React from 'react'

function Person(props) {
    const {person} = props;
    return (
        <div>
            <h2>I am {person.name}. My age is {person.age} year old. I know {person.skill}</h2>
        </div>
    )
}

export default Person
