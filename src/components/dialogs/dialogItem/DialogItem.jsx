import React from 'react';
import classes from './DialogItem.module.css'
import { NavLink } from 'react-router-dom';

const DialogItem = ({ id, name }) => {

    let path = "/dialogs/" + id

    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <img className={classes.myAvatar} src='/UserAvatar.png' alt='' />
            <NavLink className={classes.name} to={path}>{name}</NavLink>
        </div>
    )
}

export default DialogItem;