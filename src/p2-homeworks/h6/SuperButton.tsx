import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    red?: boolean
    default?: boolean
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        red, className,
        ...restProps
    }
) => {
    const finalClassName = className

    return (
        <button
            className={finalClassName}
            {...restProps} />
    )
}

export default SuperButton
