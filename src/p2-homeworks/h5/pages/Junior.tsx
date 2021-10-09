import React, {useState} from 'react'
import styles from './Junior.module.css'
import HW7 from '../../h7/HW7'

const homeworks = [
    {
        id: 0,
        code: <HW7/>,
        title: 'sixth homework'
    },
]

function Junior() {
    const [task, setTask] = useState<number>(0)

    return (
        <div className={styles.wrapper}>
            <div className={styles.nava}>
                {homeworks.map(homework => {
                    return <div key={homework.id}
                                onClick={() => setTask(homework.id)}
                                className={task === homework.id ? styles.active : ''}>{homework.title}</div>
                })}
            </div>
            <div className={styles.homeworkWrapper}>
                {task !== 100 && homeworks[task].code}
            </div>
        </div>
    )
}
export default Junior