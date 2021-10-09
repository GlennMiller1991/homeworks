import React, {useState} from 'react'
import SuperSelect from './common/c5-SuperSelect/SuperSelect'
import SuperRadio from './common/c6-SuperRadio/SuperRadio'
import styles from './HW7.module.css'

export type variantType = string
const arr: Array<variantType> = ['x', 'y', 'z']


function HW7() {
    const [value, onChangeOption] = useState<variantType>(arr[1])

    return (
        <div className={styles.wrapper}>
            <div>
                <SuperSelect
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>
            <div className={styles.radioWrapper}>
                <SuperRadio
                    name={'radio'}
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>

        </div>
    )
}

export default HW7
