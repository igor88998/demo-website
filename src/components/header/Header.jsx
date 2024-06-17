import React from 'react'
import classes from './Header.module.css'
import { NavLink } from 'react-router-dom'

const Header = ({ isAuth, login, logout }) => {
    return (
        <header className={classes.header}>
            <div>LegoChat</div>
            <div className={classes.loginBlock}>
                {isAuth
                 ? <div>{login} <button onClick={logout} className={classes.loginButton}>Log out</button></div>
                 : <NavLink className={classes.loginText} to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    )
}

export default Header
