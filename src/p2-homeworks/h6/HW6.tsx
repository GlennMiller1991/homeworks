import React, {useState} from 'react'
import SuperEditableSpan from './SuperEditableSpan'
import SuperButton from './SuperButton'
import {restoreState, saveState} from './localStorage'
import styles from './HW6.module.css'

function HW6() {

    //initial states
    const [value, setValue] = useState<string>('')

    //functions
    const save = () => {
        saveState<string>('editable-span-value', value)
    }
    const restore = () => {
        setValue(restoreState('editable-span-value', ''))
    }

    return (
        <div className={styles.wrapper}>
            <hr/>
            <div>
                <SuperEditableSpan
                    autoFocus
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined : 'local storage demo'}}
                    className={styles.input}
                    spanClassName={styles.spanch}
                />
            </div>
            <SuperButton onClick={save} className={styles.button}>save</SuperButton>
            <SuperButton onClick={restore} className={styles.button}>restore</SuperButton>
        </div>
    )
}

export default HW6
