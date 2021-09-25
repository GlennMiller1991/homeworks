import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

// types
type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

// components
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов

    // initial states
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<boolean>(false)

    // callbacks
    const setNameCallback = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.currentTarget.value)
    }
    const addUser = () => {
        if (name) {
            addUserCallback(name)
            setName('')
            setError(false)
            alert(`Hello, ${name}!`)
        } else {
            setError(true)
        }
    }

    // return
    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={users.length}
        />
    )
}

export default GreetingContainer
