import React from 'react'
import {Slider} from "@mui/material";
import styles from './SuperDoubleRange.module.css'

type SuperDoubleRangePropsType = {
    onChangeRange: (value: number[]) => void
    value: [number, number]
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange,
        value
    }) => {
    const onChangeCallback = (e: Event, value: number | number[]) => {
        if (typeof (value) === typeof ([])) {
            //@ts-ignore
            onChangeRange(value)
        }
    }
    return (
        <>
            <div className={styles.slider}>
                <Slider value={value}
                        getAriaLabel={() => 'Percentage range'}
                        valueLabelDisplay="auto"
                        onChange={onChangeCallback}
                        size={'small'}
                />
            </div>
        </>
    )
}

export default SuperDoubleRange
