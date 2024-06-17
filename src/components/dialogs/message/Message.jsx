import React from 'react';
import classes from './Message.module.css'

const Message = ({ className, name, avatar, message }) => {
    return (
        <div className={`${classes.messages} ${className}`}>
            <div>{name}</div>
            <img className={classes.userAvatar} src={avatar} alt='' />
            <div className={`${classes.message}`}>
                {message}
            </div>
        </div>

    )
}

export default Message;