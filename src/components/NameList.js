import React from 'react'
import Person from './Person'

function NameList() {

    const persons = [
        {
            id: 1,
            name: 'Ayub',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Ahmed',
            age: 20,
            skill: 'Vue'
        },
        {
            id: 3,
            name: 'Rohan',
            age: 24,
            skill: 'Angular'
        }
    ]
    const nameList = persons.map(person => <Person key={person.id} person={person} />)
    return (
        <div>
            {
                nameList
            }
        </div>
    )
}

export default NameList
