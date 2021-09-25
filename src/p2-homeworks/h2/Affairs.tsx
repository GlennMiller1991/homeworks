import React, {Dispatch, SetStateAction} from 'react'
import Affair, {AffairPropsType} from './Affair'
import {AffairType, FilterType} from './HW2'
import styles from './Affairs.module.css'
import {SuperButton} from './SuperButton'

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: Dispatch<SetStateAction<FilterType>>
    deleteAffairCallback: AffairPropsType['deleteAffairCallback']
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a:AffairType) => (
        <Affair
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all')
    }
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }

    return (
        <div id={styles.wrapper}>
            <ul className={styles.affairs}>
                {mappedAffairs}
            </ul>
            <div className={styles.btns}>
                <SuperButton className={styles.btn} onClick={setAll}>All</SuperButton>
                <SuperButton className={styles.btn} onClick={setHigh}>High</SuperButton>
                <SuperButton className={styles.btn} onClick={setMiddle}>Middle</SuperButton>
                <SuperButton className={styles.btn} onClick={setLow}>Low</SuperButton>
            </div>
        </div>
    )
}

export default Affairs
