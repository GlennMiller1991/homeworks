import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from 'uuid'

// types
export type UserType = {
    _id: string
    name: string
}

// components
function HW3() {

    // initial states
    const [users, setUsers] = useState<Array<UserType>>([])

    // callbacks
    const addUserCallback = (name: string) => {
        setUsers([...users, {_id: v1(), name: name}])
    }

    // return
    return (
        <div>
            <hr/>
            homeworks 3
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    )
}

export default HW3
