import React from 'react'
import {AffairType} from "./HW2";
import styles from './Affairs.module.css'

export type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    return (
        <li className={styles.affair}
            onClick={deleteCallback}>
            {props.affair.name}
            <hr/>
            {props.affair.priority}
        </li>
    )
}

export default Affair
