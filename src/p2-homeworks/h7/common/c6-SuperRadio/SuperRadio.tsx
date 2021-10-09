import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import {variantType} from "../../HW7";
import {inspect} from "util";
import styles from '../../HW7.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: Array<variantType>
    onChangeOption?: (option: variantType) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: any[] = options ? options.map((o, i) => { // map options with key

        const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
            onChange && onChange(e)
            onChangeOption && onChangeOption(o)
        }
        return (
            <div className={styles.radioWrapper}>
                <label key={name + '-' + i}>
                    <input type={'radio'}
                       checked={value === o}
                       onChange={onChangeCallback}/>

                {o}</label>
            </div>
        )
    }) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
