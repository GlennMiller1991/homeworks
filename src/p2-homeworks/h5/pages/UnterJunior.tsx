import React, {useState} from 'react'
import styles from './UtterJunior.module.css'
import HW1 from "../../h1/HW1";
import HW4 from "../../h4/HW4";
import HW3 from "../../h3/HW3";
import HW2 from "../../h2/HW2";

const homeworks = [
    {
        id: 0,
        code: <HW1/>,
        title: 'first homework'
    },
    {
        id: 1,
        code: <HW2/>,
        title: 'second homework'
    },
    {
        id: 2,
        code: <HW3/>,
        title: 'third homework'
    },
    {
        id: 3,
        code: <HW4/>,
        title: 'fourth homework'
    },
]

function UnterJunior() {

    //initial states
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
                {homeworks[task].code}
            </div>
        </div>
    )
}

export default UnterJunior