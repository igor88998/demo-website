import classes from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
import NavbarFriends from './navbarFriends/NavbarFriends'

const Navbar = ({ sidebar }) => {

    let friendsName = sidebar.friendsData.map(friend => <NavbarFriends name={friend.name} key={friend.id} id={friend.id} />)

    return (
        <nav className={classes.nav}>
            <div>
                <div className={classes.navContainer}>
                    <div className={classes.item}>
                        <NavLink to="/profile" className={({ isActive }) => (isActive ? classes.activeLink : '')}>Profile</NavLink>
                    </div>
                    <div className={classes.item}>
                        <NavLink to="/dialogs" className={({ isActive }) => (isActive ? classes.activeLink : '')}>Messages</NavLink>
                    </div>
                    <div className={classes.item}>
                        <NavLink to="/news" className={({ isActive }) => (isActive ? classes.activeLink : '')}>News</NavLink>
                    </div>
                    <div className={classes.item}>
                        <NavLink to="/music" className={({ isActive }) => (isActive ? classes.activeLink : '')}>Music</NavLink>
                    </div>
                    <div className={classes.item}>
                        <NavLink to="/settings" className={({ isActive }) => (isActive ? classes.activeLink : '')}>Settings</NavLink>
                    </div>
                    <div className={classes.item}>
                        <NavLink to="/users" className={({ isActive }) => (isActive ? classes.activeLink : '')}>Users</NavLink>
                    </div>
                </div>

                <div className={classes.navFriends}>
                    <div className={classes.friendsHeading}>
                        Friends
                    </div>
                    <div className={classes.friendsContainer}>
                        {friendsName}
                    </div>
                </div>





            </div>
        </nav>
    )
}

export default Navbar
