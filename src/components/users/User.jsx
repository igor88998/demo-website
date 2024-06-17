import React from 'react';
import classes from './Users.module.css'
import userAvatar from '../../assets/images/userAvatar.png'
import { NavLink } from 'react-router-dom';

const User = ({ user, followingInProgress, unfollow, follow }) => {

    return (
        <div className={classes.userContainer}>
            <div className={classes.userAvaAndStatus}>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small ? user.photos.small : userAvatar} className={classes.userPhoto} alt='' />
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button className={classes.unfollowButton} disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            unfollow(user.id)
                        }}>Unfollow</button>

                        : <button className={classes.followButton} disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            follow(user.id)
                        }}>Follow</button>
                    }
                </div>
            </div>
            <div className={classes.userInfo}>
                <div>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </div>
                <div className={classes.userLocation}>
                    <div>{"u.location.country"},</div>
                    <div>{"u.location.city"}</div>
                </div>
            </div>
        </div>
    )
};

export default User;