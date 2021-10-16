import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import styles from './HW9.module.css'

function Clock() {
    const zeroForDate = (someDataNumber: number) => {
        const item = someDataNumber.toString()
        return item.length === 4
            ? item
            : item.length === 1
                ? `0` + item
                : item
    }

    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 100)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const stringTime = zeroForDate(date.getHours()) + ':' + zeroForDate(date.getMinutes()) + ':' + zeroForDate(date.getSeconds())
    const stringDate = zeroForDate(date.getDate()) + ':' + zeroForDate(date.getMonth()) + ':' + zeroForDate(date.getFullYear())

    return (
        <div className={styles.wrapper}>
            <div className={styles.time}
                 onMouseEnter={onMouseEnter}
                 onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show && (
                <div className={styles.date}>
                    {stringDate}
                </div>
            )}
            <div className={styles.btns}>
                <SuperButton className={styles.btn} onClick={start}>start</SuperButton>
                <SuperButton className={styles.btn} onClick={stop}>stop</SuperButton>
            </div>
        </div>
    )
}

export default Clock
