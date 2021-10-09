import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import styles from './HW8.module.css'

export type UserType = {
    _id: number
    name: string
    age: number
}

const initialPeople: Array<UserType> = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<UserType[]>(initialPeople)

    const finalPeople = people.map((p) => (
        <div key={p._id}>
            {p.name}, {p.age}
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'up'}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'down'}))
    const checkEighteen = () => setPeople(homeWorkReducer(initialPeople, {type: 'check'}))

    return (
        <div className={styles.wrapper}>
            <hr/>
            <div className={styles.buttons}>
                <SuperButton className={styles.active}
                             onClick={sortUp}>sort up</SuperButton>
            </div>
            <div className={styles.buttons}>
                <SuperButton className={styles.active}
                             onClick={sortDown}>sort down</SuperButton>
            </div>
            <div className={styles.buttons}>
                <SuperButton className={styles.active}
                             onClick={checkEighteen}>check 18</SuperButton>
            </div>
            <hr/>
            {finalPeople}

            <hr/>
            <hr/>
        </div>
    )
}

export default HW8
