import React from 'react';
import classes from './DialogItem.module.css'
import { NavLink } from 'react-router-dom';
import friendAvatar from '../../../assets/images/friendAvatar.png'

const DialogItem = ({ id, name }) => {

    let path = "/dialogs/" + id

    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <img className={classes.myAvatar} src={friendAvatar} alt='' />
            <NavLink className={classes.name} to={path}>{name}</NavLink>
        </div>
    )
}

export default DialogItem;