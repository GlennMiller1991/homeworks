import React, {useState} from 'react'
import styles from './Junior.module.css'
import HW7 from '../../h7/HW7'
import HW8 from "../../h8/HW8";
import HW9 from "../../h9/HW9";
import HW10 from "../../h10/HW10";

const homeworks = [
    {
        id: 0,
        code: <HW7/>,
        title: 'sixth homework'
    },
    {
        id: 1,
        code: <HW8/>,
        title: 'seventh homework'
    },
    {
        id: 2,
        code: <HW9/>,
        title: 'eighth homework'
    },
    {
        id: 3,
        code: <HW10/>,
        title: 'ninth homework'
    },
]

function Junior() {
    const [task, setTask] = useState<number>(homeworks.length - 1)

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