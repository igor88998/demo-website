import React from 'react';
import classes from './NavbarFriends.module.css'
import { NavLink } from 'react-router-dom';

const NavbarFriends = ({ name }) => {
    return (
        <div className={classes.friendsInfo}>
            <div className={classes.circle} />
            <NavLink to={'/'}>{name}</NavLink>
        </div>
    );
};

export default NavbarFriends;