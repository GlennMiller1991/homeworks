import React from 'react'
import {Message} from "./Message";

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'The Beatles',
    message: 'Is there anybody going to listen to my story? All about the girl who came to stay. ' +
        'She\'s a kind of girl you want so much. It makes you sorry still you don\'t regret a single day',
    time: '20.08.2021 22:00',
}

function HW1() {
    return (
        <div>
            <hr/>
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
        </div>
    )
}

export default HW1
