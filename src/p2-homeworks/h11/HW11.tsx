import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import styles from './HW11.module.css'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)
    const onChangeRange = (value: number[]) => {
        setValue1(value[0])
        setValue2(value[1])
    }
    return (
        <div className={styles.wrapper}>
            <hr/>
            <div>
                <div className={styles.range}>{value1}</div>
                <div className={styles.range}>
                    <SuperRange value={value1}
                                onChangeRange={(value: number) => {
                                    setValue1(value)
                                }}/>
                </div>
            </div>

            <div className={styles.slider}>
                <div className={styles.range}>Range: {value1} - {value2}</div>
                <div className={styles.range}>Percentage range</div>
                <div className={styles.range}>
                    <SuperDoubleRange value={[value1, value2]}
                                      onChangeRange={onChangeRange}/>
                </div>
            </div>
        </div>
    )
}

export default HW11
