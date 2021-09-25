import React, {ChangeEvent, KeyboardEvent} from 'react'
import styles from './Greeting.module.css'
import {SuperButton} from './../h2/SuperButton'
import SuperInput from "./SuperInput";

// types
type GreetingPropsType = {
    name: string
    setNameCallback: (event: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: boolean
    totalUsers: number
}

// components
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {

    // styles
    const errorStyle = {
        border: error ? '1px solid red' : 'none',
    }

    // callbacks
    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            addUser()
        }
    }


    // return
    return (
        <div id={styles.container}>
            <div className={styles.field}>
                <div className={styles.inputLine}>

                    {/*
                    Я оценил универсальность компоненты SuperInput, но
                    стили уже были заточены под другую структуру. Поэтому в
                    этом ДЗ использовать её не буду, а вот в последующих - да

                    <SuperInput value={name} placeholder={'Whi is your name?'}
                                onChange={setNameCallback}
                                onKeyPress={onKeyPressHandler}
                                style={errorStyle}/>*/}
                    <input value={name}
                    placeholder={'What is your name?'}
                    onChange={setNameCallback}
                    onKeyPress={onKeyPressHandler}
                    style={errorStyle}/>
                    <div className={styles.line}></div>
                </div>
                <div className={styles.rest}>
                    <span>{error}</span>
                    <SuperButton style={errorStyle} onClick={addUser}>add</SuperButton>
                    <hr/>
                    <span>total users: {totalUsers} </span>
                </div>
            </div>
        </div>
    )
}

export default Greeting
