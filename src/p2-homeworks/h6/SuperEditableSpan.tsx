import React, {DetailedHTMLProps, InputHTMLAttributes, HTMLAttributes, useState} from 'react'
import SuperInputText from './SuperInputText'
import pencil from './pencil.png'

//types
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type DefaultSpanPropsType = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>
type SuperEditableSpanType = DefaultInputPropsType & {
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: string
    spanClassName?: string
    spanProps?: DefaultSpanPropsType
}

//components
const SuperEditableSpan: React.FC<SuperEditableSpanType> = (
    {
        autoFocus,
        onBlur,
        onEnter,
        spanProps,
        ...restProps
    }) => {

    //initial states
    const [editMode, setEditMode] = useState<boolean>(false)
    const {children, onDoubleClick, className, ...restSpanProps} = spanProps || {}

    //callbacsks
    const onEnterCallback = () => {
        setEditMode(false)
        onEnter && onEnter()
    }
    const onBlurCallback = (e: React.FocusEvent<HTMLInputElement>) => {
        setEditMode(false)
        onBlur && onBlur(e)
    }
    const onDoubleClickCallBack = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        setEditMode(true)
        onDoubleClick && onDoubleClick(e)
    }
    const pencilStyle = {
        width: '25px',
        height: '25px',
    }

    return (
        <>
            {editMode ?
                <SuperInputText
                    onBlur={onBlurCallback}
                    onEnter={onEnterCallback}
                    autoFocus
                    {...restProps}
                /> :
                <><span onDoubleClick={onDoubleClickCallBack}
                      className={restProps.spanClassName}
                      {...restSpanProps}>
                        {children || restProps.value}
                    </span><img style={pencilStyle} src={pencil}/></>
            }
        </>
    )
}

export default SuperEditableSpan
