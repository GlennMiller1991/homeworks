import React from 'react';
import classes from './Message.module.css';

type MessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}

export const Message = (props: MessagePropsType) => {
    return (
        <div id={classes.post}>
            <img src={props.avatar} alt={'not available'}/>
            <div id={classes.bubble}></div>
            <div id={classes.text}>
                <div id={classes.name}>{props.name}</div>
                <div id={classes.time}>{props.time}</div>
                <div id={classes.message}>{props.message}</div>
            </div>
        </div>
    );
}